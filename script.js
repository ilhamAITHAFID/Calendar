const date=new Date();
const renderCalendar = () => {

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;


/**les mois d'annee */
const months=[
  "Janvier",
  "Fevrier", 
  "Mars",
  "Avril",
  "May",
  "Juin",
  "Juillet",
  "Aout",
  "Septembre",
  "Octobre",
  "Novembre",
  "Decembre",
];
/** toLocaleDateString()renvoie une chaîne de caractères correspondant à la date 
  (le fragment de l'objet qui correspond à la date : jour, mois, année) indiqué selon 
  une donnée locale et pour le fuseau horaire de l'agent utilisateur.
 * Les arguments localeset optionspermettent aux applications de définir
   le langage utilisé pour les conventions de format et permettent de personnaliser 
   le comportement de la fonction. */
options={weekday: 'long',year: 'numeric', month: 'long', day: 'numeric'};
optionsYearMonth={year: 'numeric', month: 'long'};
document.querySelector(".date h1").innerHTML=date.toLocaleDateString(undefined,optionsYearMonth);   
document.querySelector(".date p").innerHTML= new Date().toLocaleDateString(undefined,options);
let days="";
/**les avant first day oh a month  */

for (let x = firstDayIndex; x > 0; x--) {
  days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
}
/**affichage des jours */

for (let i = 1; i <= lastDay; i++) {
  if (
    i === new Date().getDate() &&
    date.getMonth() === new Date().getMonth()
  ) {
    days += `<div class="today">${i}</div>`;
  } else {
    days += `<div>${i}</div>`;
  }
}
/**next days */
for (let j = 1; j <= nextDays; j++) {
  days += `<div class="next-date">${j}</div>`;
  monthDays.innerHTML = days;
}

};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();

