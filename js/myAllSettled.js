Promise.allSettled = (promises) => {
    return Promise.all(
      promises.map((p) =>
        p
          .then((res) => {
            return { state: 'fulfilled', value: res };
          })
          .catch((err) => {
            return { state: 'reason', value: err };
          })
      )
    );
  };