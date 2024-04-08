class LinkedListNode {
  constructor(private data: any, private next?: LinkedListNode) {}

  public setNext = (ref: LinkedListNode) => (this.next = ref);
  public getData = () => this.data;
  public getNext = () => this.next;
}

class LinkedList {
  constructor() {}

  private firstNode?: LinkedListNode;
  private lastNode?: LinkedListNode;

  public insert = (data: any) => {
    const node = new LinkedListNode(data);

    if (!this.firstNode) {
      this.firstNode = node;
    }

    if (!this.lastNode) {
      this.lastNode = node;
    }

    if (this.firstNode === this.lastNode) {
      this.firstNode.setNext(node);
    }

    this.lastNode.setNext(node);
    this.lastNode = node;

    return this;
  };

  public delete = (data: LinkedListNode): boolean => {
    let cursor = this.firstNode;

    while (cursor) {
      const nextNode = cursor.getNext();

      if (cursor === data) {
        if (cursor === this.firstNode) {
          this.firstNode = nextNode;

          return true;
        }
      }

      if (nextNode === data) {
        if (data === this.lastNode) {
          this.lastNode = cursor;

          return true;
        }
      }

      cursor = nextNode;
    }

    return false;
  };

  public traverse = () => {
    if (!this.firstNode) {
      return console.log("List is empty");
    }

    let cursor: LinkedListNode | undefined = this.firstNode;

    while (cursor) {
      console.log(cursor.getData());

      cursor = cursor.getNext();
    }
  };
}

const list = new LinkedList();

list.insert(1).insert(2).insert(3).insert(4).traverse();
