// do something!

const userCreateStar = maxRating => {
  const StarContainer = document.createElement("div");

  StarContainer.className = `star-rating-container`;

  for (let i = 0; i < maxRating; i++) {
    let li = document.createElement("i");
    li.dataset.id = i + 1;

    li.className = `bx bxs-star`;
    StarContainer.appendChild(li);
  }

  return StarContainer;
};

const onsetEvent = $container => {
  let currentAll = -1; // 초기값 설정

  $container.addEventListener("mouseover", event => {
    let clickedElementId = event.target.dataset.id;
    let showli = $container.querySelectorAll("i");

    let idcheck = idHightCheck(clickedElementId, currentAll);

    classAdd_Del(showli, idcheck, "hovered");
  });

  const idHightCheck = (clickId, currentAll) => {
    if (clickId > currentAll) {
      currentAll = clickId;
    } else {
      currentAll = clickId;
    }

    return currentAll;
  };

  const classAdd_Del = (showli, idcheck, userValue) => {
    return [...showli].map((item, idx) =>
      idx < idcheck
        ? item.classList.add(userValue)
        : item.classList.remove(userValue)
    );
  };

  $container.addEventListener("mousedown", event => {
    let clickedElementId = event.target.dataset.id;
    let showli = $container.querySelectorAll("i");

    // 현재 클릭된 요소의 data-id가 이전에 클릭된 요소의 data-id보다 큰 경우에만 currentAll 값을 갱신

    let idcheck = idHightCheck(clickedElementId, currentAll);

    classAdd_Del(showli, idcheck, "selected");

    let currentSpan = $container.nextElementSibling.querySelector("span");

    let count = [...showli].filter(
      (item, idx) => item.className !== "bx bxs-star"
    ).length;

    currentSpan.textContent = `${count}`;
  });
};

const StarRating = $container => {
  const maxRating = $container.dataset.maxRating;

  const $CreateStar = userCreateStar(maxRating);

  $container.appendChild($CreateStar);

  onsetEvent($container);
};

export default StarRating;
