document.addEventListener("DOMContentLoaded", function () {
  const rastreios = document.getElementById("rastreios");
  const data = [
    {
      id: "NC123445BR",
      postDate: "2024-04-13",
      deliveryDate: "2024-05-13",
      status: "Em transito.",
    },
    {
      id: "NC567823BR",
      postDate: "2024-05-10",
      deliveryDate: "2024-05-21",
      status: "Entregue",
    },
    {
      id: "NC910111BR",
      postDate: "2024-05-08",
      deliveryDate: "2024-07-06",
      status: "Aguardando retirada",
    },
    {
      id: "NC121314BR",
      postDate: "2024-05-01",
      deliveryDate: "2024-05-11",
      status: "Em transito",
    },
    {
      id: "NC151617BR",
      postDate: "2024-03-12",
      deliveryDate: "2024-03-28",
      status: "Entregue",
    },
    {
      id: "NC181920BR",
      postDate: "2024-03-22",
      deliveryDate: "2024-04-14",
      status: "Postado",
    },
    {
      id: "NC212223BR",
      postDate: "2024-04-20",
      deliveryDate: "2024-05-04",
      status: "Postado",
    },
    {
      id: "NC242526BR",
      postDate: "2024-04-09",
      deliveryDate: "2024-04-09",
      status: "Aguardando liberação.",
    },
    {
      id: "NC272829BR",
      postDate: "2024-04-01",
      deliveryDate: "2024-05-01",
      status: "Aguardando liberação",
    },
    {
      id: "NC303132BR",
      postDate: "2024-04-15",
      deliveryDate: "2024-04-30",
      status: "Em transito",
    },
    {
      id: "NC333435BR",
      postDate: "2024-04-20",
      deliveryDate: "2024-06-19",
      status: "Aguardando retirada",
    },
    {
      id: "NC363738BR",
      postDate: "2023-04-25",
      deliveryDate: "2024-02-10",
      status: "Entregue",
    },
    {
      id: "NC394041BR",
      postDate: "2024-04-30",
      deliveryDate: "2024-07-10",
      status: "Em transito",
    },
    {
      id: "NC424344BR",
      postDate: "2024-05-05",
      deliveryDate: "2024-10-09",
      status: "Aguardando retirada",
    },
    {
      id: "NC454647BR",
      postDate: "2024-05-10",
      deliveryDate: "2024-05-18",
      status: "Em transito",
    },
    {
      id: "NC484950BR",
      postDate: "2024-05-15",
      deliveryDate: "2024-06-05",
      status: "Entregue",
    },
    {
      id: "NC515253BR",
      postDate: "2024-05-20",
      deliveryDate: "2024-06-16",
      status: "Aguardando retirada",
    },
    {
      id: "NC545556BR",
      postDate: "2024-05-25",
      deliveryDate: "2024-06-13",
      status: "Em transito",
    },
    {
      id: "NC575859BR",
      postDate: "2024-05-01",
      deliveryDate: "2024-06-23",
      status: "Aguardando retirada",
    },
    {
      id: "NC606162BR",
      postDate: "2024-05-05",
      deliveryDate: "2024-08-01",
      status: "Em transito",
    },
    {
      id: "NC636465BR",
      postDate: "2024-05-10",
      deliveryDate: "2024-05-11",
      status: "Entregue",
    },
    {
      id: "NC666768BR",
      postDate: "2024-05-15",
      deliveryDate: "2024-12-28",
      status: "Aguardando retirada",
    },
    {
      id: "NC697071BR",
      postDate: "2024-05-20",
      deliveryDate: "2025-12-09",
      status: "Em transito",
    },
  ];

  function addObjectToList(object) {
    const li = document.createElement("li");
    li.classList.add("object");

    const img = document.createElement("img");
    img.src = "../img/image48.png";
    img.classList.add("truck");

    const info = document.createElement("div");
    info.classList.add("info");

    const id = document.createElement("p");
    id.textContent = `ID de rastreio: ${object.id}`;

    const postDate = document.createElement("p");
    postDate.textContent = `Postagem: ${object.postDate}`;

    const deliveryDate = document.createElement("p");
    deliveryDate.textContent = `Entregue: ${object.deliveryDate}`;

    const notifyButton = document.createElement("button");
    notifyButton.textContent = "Enviar Notificação";
    notifyButton.classList.add("notify-button");
    notifyButton.addEventListener("click", () => {
      alert(`Status da entrega do código ${object.id}: ${object.status}`);
    });

    info.appendChild(id);
    info.appendChild(postDate);
    info.appendChild(deliveryDate);
    info.appendChild(notifyButton);

    const progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");

    const progress = document.createElement("div");
    progress.classList.add("progress");

    const progressPercentage = calculateProgress(object);
    progress.style.width = progressPercentage + "%";

    switch (progressPercentage) {
      case 10:
        progress.style.backgroundColor = "#00CED1";
        break;
      case 25:
        progress.style.backgroundColor = "#ff4500";
        break;
      case 50:
        progress.style.backgroundColor = "#ffa500";
        break;
      case 75:
        progress.style.backgroundColor = "#ffd700";
        break;
      case 100:
        progress.style.backgroundColor = "#32cd32";
        break;
      default:
        progress.style.backgroundColor = "#808080";
    }

    progressBar.appendChild(progress);

    li.appendChild(img);
    li.appendChild(info);
    li.appendChild(progressBar);

    rastreios.appendChild(li);
  }

  function calculateProgress(object) {
    switch (object.status) {
      case "Aguardando liberação":
        return 10;
      case "Postado":
        return 25;
      case "Em transito":
        return 50;
      case "Aguardando retirada":
        return 75;
      case "Entregue":
        return 100;
      default:
        return 0;
    }
  }

  function displayData(dataArray) {
    rastreios.innerHTML = "";
    dataArray.forEach(addObjectToList);
  }

  data.forEach(addObjectToList);

  const searchInput = document.querySelector("#searchInput");
  searchInput.addEventListener("keyup", (e) => {
    const search = data.filter((i) =>
      i.id.toLowerCase().includes(e.target.value.toLowerCase())
    );
    displayData(search);
  });

  const statusFilter = document.querySelector("#statusFilter");
  statusFilter.addEventListener("change", (e) => {
    const status = e.target.value;
    const filteredData = status
      ? data.filter((item) => item.status === status)
      : data;
    displayData(filteredData);
  });

  window.addEventListener("load", function () {
    displayData(data);
  });
});
