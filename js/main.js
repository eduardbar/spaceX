import {
    load,
    paginationCapsules,
    paginationRockets,
    paginationLaunches,
    paginationCrew,
    paginationCores,
    paginationDragons,
    paginationHistory,
    paginationLandpads,
    paginationLaunchpads
  } from "./modulesComponents/pagination.js";
  
  const footerSelect = async (e, id) => {
    e.preventDefault();
    await load();
    const listItems = document.querySelectorAll(".footer ul li");
    listItems.forEach((item) => {
      const [anchor] = item.children;
      anchor.classList.remove('select');
    });
    const [anchor] = id.children;
    anchor.classList.add('select');
  };
  
  const handleFooterClick = async (e, paginationFunction) => {
    await footerSelect(e, e.currentTarget);
    const paginationContainer = document.querySelector("#paginacion");
    paginationContainer.innerHTML = "";
    paginationContainer.append(await paginationFunction());
  };
  
  const rocket = document.querySelector("#rocket");
  rocket.addEventListener("click", (e) => handleFooterClick(e, paginationRockets));
  
  const capsules = document.querySelector("#capsules");
  capsules.addEventListener("click", (e) => handleFooterClick(e, paginationCapsules));
  
  const launches = document.querySelector("#launches");
  launches.addEventListener("click", (e) => handleFooterClick(e, paginationLaunches));
  
  const Crew = document.querySelector("#Crew");
  Crew.addEventListener("click", (e) => handleFooterClick(e, paginationCrew));
  
  const Cores = document.querySelector("#Cores");
  Cores.addEventListener("click", (e) => handleFooterClick(e, paginationCores));
  
  const Dragons = document.querySelector("#Dragons");
  Dragons.addEventListener("click", (e) => handleFooterClick(e, paginationDragons));
  
  const History = document.querySelector("#History");
  History.addEventListener("click", (e) => handleFooterClick(e, paginationHistory));
  
  const Landpads = document.querySelector("#Landpads");
  Landpads.addEventListener("click", (e) => handleFooterClick(e, paginationLandpads));
  
  const Launchpads = document.querySelector("#Launchpads");
  Launchpads.addEventListener("click", (e) => handleFooterClick(e, paginationLaunchpads));
  
  Dragons.click();