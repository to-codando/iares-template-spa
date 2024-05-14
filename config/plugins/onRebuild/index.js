export const onRebuild = () => {
  return {
    name: "on-rebuild",
    setup(build) {
      let count = 0;
      build.onEnd((result) => {
        if (count++ === 0) return;
        const time = new Date();
        console.log(`rebuilded: ${time}`);
      });
    },
  };
};
