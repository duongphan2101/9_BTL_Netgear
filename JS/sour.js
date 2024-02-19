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




  /*****************/
  var listItem1 = document.getElementById('business-list');
  var menu1 = document.getElementById('business-sub-nav');

  // Bắt sự kiện mouseover để hiển thị menu
  listItem1.addEventListener('mouseover', function () {
    menu1.style.display = 'block';
  });

  // Bắt sự kiện mouseout để ẩn menu
  listItem1.addEventListener('mouseout', function () {
    menu1.style.display = 'none';
  });

  var listItem1 = document.getElementById('business-sub-nav');
  var menu1 = document.getElementById('business-sub-nav');

  // Bắt sự kiện mouseover để hiển thị menu
  listItem1.addEventListener('mouseover', function () {
    menu1.style.display = 'block';
  });

  // Bắt sự kiện mouseout để ẩn menu
  listItem1.addEventListener('mouseout', function () {
    menu1.style.display = 'none';
  });
  



  /*****************/
  var listItem2 = document.getElementById('av-list');
  var menu2 = document.getElementById('AV-sub-nav');

  // Bắt sự kiện mouseover để hiển thị menu
  listItem2.addEventListener('mouseover', function () {
    menu2.style.display = 'block';
  });

  // Bắt sự kiện mouseout để ẩn menu
  listItem2.addEventListener('mouseout', function () {
    menu2.style.display = 'none';
  });

  var listItem2 = document.getElementById('AV-sub-nav');
  var menu2 = document.getElementById('AV-sub-nav');

  // Bắt sự kiện mouseover để hiển thị menu
  listItem2.addEventListener('mouseover', function () {
    menu2.style.display = 'block';
  });

  // Bắt sự kiện mouseout để ẩn menu
  listItem2.addEventListener('mouseout', function () {
    menu2.style.display = 'none';
  });


  /************ */
  var opensearch = document.getElementById('btn-open-search');
  var modalsearch = document.getElementById('box-search-modal');
  var closemodalsearch = document.getElementById('close-box-search-modal');

  opensearch.onclick = function(){
    modalsearch.style.display = "block";
  };

  closemodalsearch.onclick = function(){
    modalsearch.style.display = "none";
  };

  window.onclick = function(event){
    if(event.target == modalsearch){
      modalsearch.style.display = "none";
    }
  };

  var lg = document.getElementById('language');
  var ul_lg = document.getElementById('ul-language');

  lg.addEventListener('mouseover', function(){
      ul_lg.style.display = "block";
  });

  lg.addEventListener('mouseout', function(){
    ul_lg.style.display = "none";
});

var lg = document.getElementById('ul-language');
var ul_lg = document.getElementById('ul-language');

lg.addEventListener('mouseover', function(){
    ul_lg.style.display = 'block';
});

lg.addEventListener('mouseout', function(){
  ul_lg.style.display = 'none';
});