// https://neal.fun/stimulation-clicker/
function clickMainBtn() {
  const mainBtn = document.getElementsByClassName("main-btn")[0];
  if (mainBtn) {
    mainBtn.click();
  }
}

function purchaseUpgrades() {
  const upgrades = document.querySelectorAll(".upgrade:not(.upgrade-disabled)");
  if (upgrades.length > 0) {
    Array.from(upgrades).toReversed()[0].click();
  }
}

function hydraulicPress() {
  const start = document.querySelectorAll(".hydraulic-press button.press-btn")[0];
  if (start) {
    start.click();
  }

  const collect = document.querySelectorAll(".hydraulic-press button.press-collect")[0];
  if (collect) {
    collect.click();
  }
}

function collectLevelRewards() {
  const collect = document.querySelectorAll(".levels button.collect")[0];
  if (collect) {
    collect.click();
  }
}

const cheats = [];

function end() {
  const endWrapper = document.getElementsByClassName("end-wrapper")[0];
  if (endWrapper) {
    cheats.forEach((cheat) => {
      clearInterval(cheat);
    });
  }
}

(function start() {
  cheatCodes = [
    setInterval(clickMainBtn, 0),
    setInterval(purchaseUpgrades, 300),
    setInterval(hydraulicPress, 300),
    setInterval(collectLevelRewards, 300),
  ];
})();
