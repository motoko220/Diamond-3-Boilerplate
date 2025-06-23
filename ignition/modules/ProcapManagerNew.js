const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("ProcapManagerNew", (m) => {
  const owner = m.getAccount(0);
  const procapView = m.library("ProcapView", { from: owner });
  const procapManagerNew = m.contract("ProcapManagerNew", [], {
    libraries: {
      ProcapView: procapView,
    },
  });
  return { procapView, procapManagerNew };
});
