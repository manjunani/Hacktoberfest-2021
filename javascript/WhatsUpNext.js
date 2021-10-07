function nextItem(xs, item) {
    if(xs.next) {
      while(xs.next().value < item) {}
      return xs.next().value
    }
  return xs.indexOf(item) < 0? undefined : xs[xs.indexOf(item)+1]
}
