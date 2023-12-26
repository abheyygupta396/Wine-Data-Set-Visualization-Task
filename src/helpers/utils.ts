interface Wine {
  Alcohol: number;
  "Malic Acid": number;
  Ash: number;
  "Alcalinity of ash": number;
  Magnesium: number;
  "Total phenols": number;
  Flavanoids: number;
  "Nonflavanoid phenols": number;
  Proanthocyanins: number;
  "Color intensity": number;
  Hue: number;
  "OD280/OD315 of diluted wines": number;
  Unknown: number;
  Gamma?: number; //! Added Gamma property for Gamma calculations
}

type ClassStats = {
  alcoholClass: number;
  mean: number;
  median: number;
  mode: number;
};

export const measureDataSet = (
  wineData: Wine[],
  property: string
): ClassStats[] => {
  // Check if wineData is undefined or null
  if (!wineData || wineData.length === 0) {
    return [];
  }
  // Extract unique alcohol classes
  const uniqueClasses = [...new Set(wineData?.map((wine) => wine?.Alcohol))];

  // Calculate statistics for each class
  const classStats: ClassStats[] = uniqueClasses?.map((alcoholClass) => {
    // Filter data for the current class
    const classData = wineData?.filter(
      (wine) => wine?.Alcohol === alcoholClass
    );

    // Extract values for the specified property
    const propertyValues = classData?.map(
      (wine) => Number(wine[property]) as number
    ); // properties will come either of Flavanoid or Gamma

    // Calculate mean
    const mean =
      propertyValues?.reduce((acc, val) => acc + val, 0) /
      propertyValues?.length;

    // Calculate median
    const sortedValues = [...propertyValues]?.sort((a, b) => a - b); // arrange in ascending order
    const mid = Math.floor(sortedValues.length / 2); // find mid points for calculation
    const median =
      sortedValues?.length % 2 === 0
        ? (sortedValues[mid - 1] + sortedValues[mid]) / 2
        : sortedValues[mid];

    // Calculate mode
    const modeMap: { [key: number]: number } = {}; // assign an obj
    let maxCount = 0;
    let mode = 0;
    propertyValues?.forEach((val) => {
      modeMap[val] = (modeMap[val] || 0) + 1;
      if (modeMap[val] > maxCount) {
        maxCount = modeMap[val];
        mode = val;
      }
    });

    // Return class statistics
    return {
      alcoholClass,
      mean: parseFloat(mean.toFixed(3)),
      median: parseFloat(median.toFixed(3)),
      mode: parseFloat(mode.toFixed(3)),
    };
  });

  return classStats;
};
