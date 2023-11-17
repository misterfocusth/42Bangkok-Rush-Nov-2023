const silePortButton = document.getElementById("sila-port-button");
const surutaPortButton = document.getElementById("saruta-port-button");

const silaProfileCard = document.getElementById("sila-profile-card");
const sarutaProfileCard = document.getElementById("sila-profile-card");

const showPortfolioPageById = (username) => {
    window.location.href = `${username}/${username}.html`
}

silePortButton.addEventListener('click', () => showPortfolioPageById("sipakdee"))
silaProfileCard.addEventListener('click', () => showPortfolioPageById("sipakdee"))
surutaPortButton.addEventListener('click', () => showPortfolioPageById("storaat"))
sarutaProfileCard.addEventListener('click', () => showPortfolioPageById("storaat"))