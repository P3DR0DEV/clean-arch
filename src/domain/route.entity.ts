export interface Position {
  latitude: number;
  longitude: number;
}
export interface RouteProps {
  title: string;
  startPosition: Position;
  endPosition: Position;
  points?: Position[];
}

export class Route {
  public props: Required<RouteProps>;
  constructor(props: RouteProps) {
    this.props = { ...props, points: props.points || [] };
  }

  updatePoints = (points: Position[]) => {
    this.points = points;
  };

  updateTitle = (title: string) => {
    this.title = title;
  };

  updatePosition(startPosition: Position, endPosition: Position) {
    this.startPosition = startPosition;
    this.endPosition = endPosition;
  }

  get title() {
    return this.props.title;
  }

  get startPosition() {
    return this.props.startPosition;
  }

  get endPosition() {
    return this.props.endPosition;
  }

  get points() {
    return this.props.points;
  }

  private set title(title: string) {
    this.props.title = title;
  }

  private set startPosition(startPosition: Position) {
    this.props.startPosition = startPosition;
  }

  private set endPosition(endPosition: Position) {
    this.props.endPosition = endPosition;
  }

  private set points(points: Position[]) {
    this.props.points = points;
  }

  toJSON() {
    return this.props;
  }
}
