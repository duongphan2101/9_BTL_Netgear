var textArray = [
    "sign up for speacial offers",
    "find the right orbi for you",
    "limited time offers ",
    "upgrade to orbi wifi 7"
  ];
  var linkArray = [
    "#",
    "youtube.com",
    "https://fb.com",
    "https://tiktok.com"
  ];

  var currenIndex = 0;

  function changeText() {
    var changingText = document.getElementById("changingText");
    changingText.innerHTML = "<a href='" + linkArray[currentIndex] + "' target='_blank'>" + textArray[currentIndex] + "</a>";
    currentIndex = (currentIndex + 1) % textArray.length;
  }
  setInterval(changeText, 5000);



  var listItem = document.getElementById('li_list');
  var menu = document.getElementById('sub-nav');

  // Bắt sự kiện mouseover để hiển thị menu
  listItem.addEventListener('mouseover', function () {
    menu.style.display = 'block';
  });

  // Bắt sự kiện mouseout để ẩn menu
  listItem.addEventListener('mouseout', function () {
    menu.style.display = 'none';
  });

  var listItem = document.getElementById('sub-nav');
  var menu = document.getElementById('sub-nav');

  // Bắt sự kiện mouseover để hiển thị menu
  listItem.addEventListener('mouseover', function () {
    menu.style.display = 'block';
  });

  // Bắt sự kiện mouseout để ẩn menu
  listItem.addEventListener('mouseout', function () {
    menu.style.display = 'none';
  });