import turtle
hr = turtle.Turtle()
hr.left(90)
hr.speed(150)
def tree(i):
    if i < 10:
        return
    hr.forward(i)
    hr.left(30)
    tree(3*i/4)
    hr.right(60)
    tree(3*i/4)
    hr.left(30)
    hr.backward(i)

tree(100)
turtle.done()
