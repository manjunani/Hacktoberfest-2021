import 'dart:html';
import 'dart:math';

CanvasElement canvas;
CanvasRenderingContext2D ctx;

const CELL_SIZE = 20;

const Point LEFT = Point(-1, 0);
const Point RIGHT = Point(1, 0);
const Point UP = Point(0, -1);
const Point DOWN = Point(0, 1);

int maxXbound;
int maxYbound;

Keyboard keyboard = Keyboard();

void main() async {
  canvas = querySelector("#canvas")..focus();
  ctx = canvas.getContext("2d");
  maxXbound = (canvas.width ~/ CELL_SIZE);
  maxYbound = (canvas.height ~/ CELL_SIZE);
  clear();  
//   Game()..run();  
}

void clear() {
  ctx
    ..fillStyle = "white"
    ..fillRect(0, 0, canvas.width, canvas.height);
}

void renderPoint(Point p, String color) {
  ctx
    ..fillStyle = color
    ..strokeStyle = 'black';

  // Makes Sure that the render Skips CELL_SIZE when rendering
  int x = p.x * CELL_SIZE as int;
  int y = p.y * CELL_SIZE as int;

  ctx
    ..fillRect(x, y, CELL_SIZE, CELL_SIZE)
    ..strokeRect(x, y, CELL_SIZE, CELL_SIZE);
}

class Keyboard {
  int keyCode = KeyCode.RIGHT;

  Keyboard() {
    window.onKeyDown.listen((e) => keyCode = e.keyCode);
  }

  bool hasKey(int code) => keyCode == code;
}

class Snake {
  static const INIT_LEN = 5;

  static const STARTING_OFFSET = Point(5, 5);

  static const color = "yellow";

  Point get head => _body.first;
  List<Point> _body;

  int get size => _body.length;

  Point _dRec = RIGHT;

  Snake() {
    _body = List.generate(INIT_LEN,
        (i) => Point(STARTING_OFFSET.x + INIT_LEN - i - 1, STARTING_OFFSET.y));
  }
  
  bool bodyContains(Point p) => _body.contains(p);

  void render() {
    renderPoint(head, 'green');
    for (Point p in _body.skip(1)) {
      renderPoint(p, color);
    }
  }

  void grow() {
    Point s = head + _dRec;
    Point p = Point(
      s.x % maxXbound, s.y % maxYbound
    );
    _body.insert(0, p);
  }

  void move() {
    grow();
    _body.removeAt(_body.length - 1);
  }

  bool collideWithItself() {
    for (Point p in _body.skip(1)) {
      if (p == head) return true;
    }
    return false;
  }
  
  bool hitBoundary() {
    return head.x == -1 || head.y == -1 || head.x == maxXbound || head.y == maxYbound;
  }

  void changeDrecIfNeeded() {
    if (keyboard.hasKey(KeyCode.LEFT) && _dRec != RIGHT) {
      _dRec = LEFT;
    }
    if (keyboard.hasKey(KeyCode.RIGHT) && _dRec != LEFT) {
      _dRec = RIGHT;
    }
    if (keyboard.hasKey(KeyCode.UP) && _dRec != DOWN) {
      _dRec = UP;
    }
    if (keyboard.hasKey(KeyCode.DOWN) && _dRec != UP) {
      _dRec = DOWN;
    }
  }

  void update() {
    changeDrecIfNeeded();
    move();
    render();
  }
}


class Game {
  Point _food;
  Snake _snake;
  
  num _lastUpdated = 0;
  
  static const GAME_SPEED = 100;
  
  Game() {    
    _init();
  }
  
  Point randomPoint() {
    Random r = Random();
    int x = r.nextInt(maxXbound - 1);
    int y = r.nextInt(maxYbound - 1);
    return Point(x,y);
  }
  
  Point generateFood() {
    Point food = randomPoint();
    while(_snake.bodyContains(food)) {
      food = randomPoint();
    }
    
    return food;
  }
  
  void _init() {
    _snake = Snake();    
    _food = generateFood();
  }
  
  void checkCollision() {
    if(_snake.head == _food) {
      _snake.grow();
      _food = generateFood();
    }
    if(_snake.hitBoundary() || _snake.collideWithItself()) {
      _init();
    }
  }
  
  void run() async{
    update(await window.animationFrame);
  }
  
  void renderFood() {
     renderPoint(_food, 'red');
  }
  
  void update(num delta) {    
    var diff = delta - _lastUpdated;
    if(diff > GAME_SPEED) {
      _lastUpdated =  delta;
      clear();      
      renderFood();
      _snake.update();
      checkCollision();      
    }
    run();
  }
}
