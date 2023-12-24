const appContainer = document.getElementById("app");

// nav options
const a1 = document.getElementById("a1"); // business
const a2 = document.getElementById("a2"); // strategy
const a3 = document.getElementById("a3"); // market
const a4 = document.getElementById("a4"); // documents

const navList = [a1, a2, a3, a4];

// set a default tab
let currentTab = a1;
currentTab.className = "open";

// info section: describes each nav tab
const info = document.getElementById("info");

const infoText = {
	a1Text:
		"Understanding your business helps you operate in a way that truly represents your brand. This clarity is crucial for organizing and structuring your business, defining roles, establishing effective communication, and achieving your goals.",
	a2Text:
		"Crafting a business strategy is like creating a guiding blueprint for your enterprise, setting a clear direction for all activities. This strategic plan acts as a compass, ensuring that every effort and resource aligns cohesively with your overarching business objectives, contributing to the overall success of your enterprise.",
	a3Text:
		"Documenting the market provides businesses a strategic advantage by tracking niche-specific online groups. Categorizing participants and understanding emerging trends allow for targeted marketing, helping you stay ahead of industry changes and gain a competitive edge.",
	a4Text:
		"Save all your important documents that you will need to show your client.",
};

// business section - form
const formSection = document.getElementById("form-section");
const bizForm = document.getElementById("biz-form");
const name = document.getElementById("name");
const niche = document.getElementById("niche");
const revenue = document.getElementById("revenue");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const bType = document.getElementById("b-type");
const btnFinalize = document.getElementById("finalize");

function switchTab(e) {
	e.preventDefault();

	for (link of navList) {
		link.className = "";
	}

	currentTab = e.target;
	e.target.classList.add("open");

	if (currentTab != a1) {
		formSection.remove();
	}

	switch (currentTab) {
		case a2:
			info.innerText = infoText.a2Text;
			break;
		case a3:
			info.innerText = infoText.a3Text;
			break;
		case a4:
			info.innerText = infoText.a4Text;
			break;
		default:
			info.innerText = infoText.a1Text;
			appContainer.append(formSection);
			break;
	}
}

navList.forEach((listItem) => {
	listItem.addEventListener("click", switchTab);
});

const bizInfo = {};

const localStorage = window.localStorage;
const saveItemsToStorage = () => {
	bizInfo.name = name.value;
	localStorage.setItem("name", name.value);

	bizInfo.niche = niche.value;
	localStorage.setItem("niche", niche.value);

	bizInfo.revenue = revenue.value;
	localStorage.setItem("revenue", `$${revenue.value}`);

	bizInfo.email = email.value;
	localStorage.setItem("email", email.value);

	bizInfo.phone = phone.value;
	localStorage.setItem("phone", phone.value);

	bizInfo.businessType = bType.value;
	localStorage.setItem("Business Type", bType.value);
};

const showBizInfo = () => {
	const bizStatusSection = document.createElement("section");
	bizStatusSection.id = "biz-status";

	let timer = setInterval(lowerOpacity, 2500);
	function lowerOpacity() {
		formSection.style.opacity -= 0.05;
		if (formSection.style.opacity == 0) {
			formSection.remove();
			clearInterval(timer);
		}
	}

	formSection.remove();
	appContainer.append(bizStatusSection);
};

bizForm.addEventListener("submit", (e) => {
	e.preventDefault();
	saveItemsToStorage();
	showBizInfo();
});
