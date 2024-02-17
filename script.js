
const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container");;

/*to get data form local storage */
const tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];

showAllTasks();

function showAllTasks() {

      tasks.forEach((value, index) => {

            const div = document.createElement("div");
            div.setAttribute("class", "task");


            const innerdiv = document.createElement("div");

            div.append(innerdiv);

            const p = document.createElement("p");
            p.innerText = value.title;
            innerdiv.append(p);

            const span = document.createElement("span");
            span.innerText = value.description;
            innerdiv.append(span);

            const btn = document.createElement("button");
            btn.setAttribute("class", "deletebtn");
            btn.innerText = "-";


            btn.addEventListener("click", () => {

                  removeTask();
                  tasks.splice(index, 1);

                  localStorage.setItem("tasks", JSON.stringify(tasks));

                  showAllTasks();
            });

            div.append(btn);

            container.append(div);
      });
}
function removeTask() {
      tasks.forEach((value) => {

            const div = document.querySelector(".task");
            div.remove();

      });
}


form.addEventListener("submit", (e) => {
      e.preventDefault();

      removeTask();/*Phle task delete honge isse*/

      tasks.push({

            title: title.value,
            description: description.value,
      });

      // console.log(tasks);

      /*Local storage mai data save*/
      localStorage.setItem("tasks", JSON.stringify(tasks));

      showAllTasks();

});

