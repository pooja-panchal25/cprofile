let loaderRef;

// Back function
export const back = navigation => {
  navigation.goBack();
};

export const setLoaderRef = (ref) => {
  loaderRef = ref;
};

export const toggleLoader = (showLoader) => {
  if (loaderRef) {
      loaderRef.toggleLoader(showLoader);
  }
};