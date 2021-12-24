export class Bottles {
  firstPhrase(n: number) {
    switch (n) {
      case 1:
        return "1 bottle of beer on the wall, 1 bottle of beer.\n";
      case 0:
        return "No more bottles of beer on the wall, no more bottles of beer.\n";
      default:
        return `${n} bottles of beer on the wall, ${n} bottles of beer.` + "\n";
    }
  }

  secondPhrase(n: number) {
    switch (n) {
      case 1:
        return "Take one down and pass it around, 1 bottle of beer on the wall.\n";
      case 0:
        return "Take it down and pass it around, no more bottles of beer on the wall.\n";
      case -1:
        return "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
      default:
        return `Take one down and pass it around, ${n} bottles of beer on the wall.` + "\n";
    }
  }

  verse(n: number) {
    return this.firstPhrase(n) + this.secondPhrase(n - 1);
  }

  verses(from: number, to: number) {
    if (from < to) throw new Error(`"from" must be larger than "to": from=${from}, to=${to}`);

    let result = [];
    for (let i = from; i >= to; i--) {
      result.push(this.verse(i));
    }
    return result.join("\n");
  }

  song() {
    return this.verses(99, 0);
  }
}
