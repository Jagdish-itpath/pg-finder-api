export class Pg {
    constructor(
        public readonly id: string,
        public name: string,
        public city: string,
        public area: string,
        public rent: number,
        public gender: string,
        public description?: string,
      ) {}
}