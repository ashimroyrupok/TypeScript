{
  //

  //   interface generic

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X
  }

  type SmartWatch = {
    brand: string;
    model: string;
    display: number;
  };

  const richDeveloper: Developer<SmartWatch> = {
    name: "Ashim",
    computer: {
      brand: "esonic",
      model: "i510",
      releaseYear: 3000,
    },
    smartWatch: {
      brand: "emilab",
      model: "ksad",
      display: 2.4,
    },
  };

  interface RichSmartWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  const poorDeveloper: Developer<RichSmartWatch> = {
    name: "Ashim",
    computer: {
      brand: "esonic",
      model: "i510",
      releaseYear: 3000,
    },
    smartWatch: {
      brand: "emilab",
      model: "ksad",
      heartTrack: true,
      sleepTrack: true,
    },
  };

  //
}
