//======================================================================================================================================================================//

//===================================================================================//
//===============================Start of Script=====================================//
//===================================================================================//

document.addEventListener("DOMContentLoaded", function () {

    //===================================================================================//
    //==================================메인비주얼========================================//
    //===================================================================================//

    var mainSlide = new Swiper(".mainVisual", {
        
        autoplay: {
            slidePerView:1,
            centeredSlides: true,
            delay: 3000,
            disableOnInteraction: false
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });

    //===================================================================================//
    //==================================광고슬라이더========================================//
    //===================================================================================//
    
    var adSlide = new Swiper(".adVisual", {
        slidesPerView: 'auto',
        loop: false,
        allowTouchMove: true,
        navigation: {
            nextEl: ".swiper-button-next02",
            prevEl: ".swiper-button-prev02"
        }
      });

    //===================================================================================//
    //==================================갤러리 슬라이드 01========================================//
    //===================================================================================//
    
    var moAdSlide = new Swiper(".monthAd", {
        autoplay: {
            slidePerView:1,
            centeredSlides: true,
            delay: 3000,
            disableOnInteraction: false
        },
        loop: true,
        allowTouchMove: true,
        spaceBetween:30,
        navigation: {
            nextEl: ".swiper-button-next03",
            prevEl: ".swiper-button-prev03"
        },
        breakpoints: {
            1023: {
                slidesPerView: 'auto',
                autoplay: false,
                loop:false,
            },
        },
    });


    // KB 2024-10-24 수정 //
    //===================================================================================//
    //==================================갤러리 슬라이드 02================================//
    //===================================================================================//
    
    var loAdSlide = new Swiper(".locationAd", {
        autoplay: {
            slidePerView:1,
            centeredSlides: true,
            delay: 3000,
            disableOnInteraction: false
        },
        loop: true,
        allowTouchMove: true,
        spaceBetween:30,
        navigation: {
            nextEl: ".swiper-button-next04",
            prevEl: ".swiper-button-prev04"
        },
        breakpoints: {
            1023: {
                slidesPerView: '4.5',
                autoplay: false,
                loop:false,
            },    
            375: {
                slidesPerView: 1.3,
                spaceBetween: 20,
            },
        },
    });

    //===================================================================================//
    //==================================갤러리 슬라이드 02========================================//
    //===================================================================================//
    
    var expSlide = new Swiper(".expTemplate", {
        autoplay: {
            slidePerView:1,
            centeredSlides: true,
            delay: 3000,
            disableOnInteraction: false
        },
        loop: true,
        allowTouchMove: true,
        spaceBetween:30,
        navigation: {
            nextEl: ".swiper-button-next05",
            prevEl: ".swiper-button-prev05"
        },
        breakpoints: {
            1023: {
                slidesPerView: 'auto',
                autoplay: false,
                loop:false,
            },
            375: {
                slidesPerView: 1.3,
                spaceBetween: 20,
            },
        },
    });

    //===================================================================================//
    //==================================메인메뉴========================================//
    //===================================================================================//

    var depth01Elements = document.querySelectorAll(".cptHeader .gnbArea .menu .headerMenu > dl");
    var headerElement = document.querySelector(".cptHeader");

    // 마우스 엔터 이벤트 핸들러
    depth01Elements.forEach(function(element) {
        element.addEventListener('mouseenter', function() {
            // 모든 depth01 요소에서 'on' 클래스 제거
            depth01Elements.forEach(function(el) {
                el.classList.remove('on');
                var head2depths = el.querySelectorAll('.head2depth');
                head2depths.forEach(function(depth) {
                    depth.style.display = 'none';
                });
            });

            // 현재 요소에 'on' 클래스 추가
            this.classList.add('on');
            
            // 현재 요소의 .head2depth 요소를 보이게 함
            var currentHead2depths = this.querySelectorAll('.head2depth');
            currentHead2depths.forEach(function(depth) {
                depth.style.display = 'flex';
            });
        });
    });

    // 마우스 리브 이벤트 핸들러
    if (headerElement) {
        headerElement.addEventListener('mouseleave', function() {
            depth01Elements.forEach(function(el) {
                el.classList.remove('on');
                var head2depths = el.querySelectorAll('.head2depth');
                head2depths.forEach(function(depth) {
                    setTimeout(function() {
                        depth.style.display = 'none';
                        depth.style.opacity = 1;
                    });
                });
            });
        });
    }

    // Select all elements with class 'mypage'
    const mypageElements = document.querySelectorAll('.mypage');

    mypageElements.forEach(mypage => {
        mypage.addEventListener('click', () => {
            const isActive = mypage.classList.contains('active');
            
            if (isActive) {
                mypage.classList.remove('active');
                fadeOut(mypage.nextElementSibling);
            } else {
                mypage.classList.add('active');
                fadeIn(mypage.nextElementSibling);
            }
        });
    });

    // Function to fade out an element
    function fadeOut(element) {
        if (!element) return;
        element.style.transition = 'opacity 0.3s ease-out';
        element.style.opacity = '0';
        setTimeout(() => {
            element.style.display = 'none';
        }, 300);
    }


    //===================================================================================//
    //=============================전체(햄버거)메뉴 오픈===================================//
    //===================================================================================//

    const allBtn = document.querySelector(".menuWrap")
    let moHeader = document.querySelector(".moHeader");
    let body = document.querySelector("body");
    window.onload = function (){

        allBtn.addEventListener('click', function() {
            if(allBtn.classList.contains('open')){
                allBtn.classList.remove('open');
                moHeader.classList.remove("on");
                body.style.overflow = "auto";
            }else{
                allBtn.classList.add('open');
                moHeader.classList.add("on");
                body.style.overflow = "hidden";
            }
        })
        
        window.addEventListener('resize', function() {
            // 'on' 클래스를 제거합니다.
            if (moHeader) {
                moHeader.classList.remove('on');
            }
            if (target) {
                target.classList.remove('active');
            }
        });
        
        const menuLinks = document.querySelectorAll('.moHeader .headerMenu > li > a');
    
        menuLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault(); // 링크의 기본 동작을 막습니다.
        
                // 현재 클릭된 링크의 상태를 확인합니다.
                const isActive = this.classList.contains('active');
        
                // 모든 메뉴 항목에서 'active' 클래스를 제거합니다.
                menuLinks.forEach(link => {
                    link.classList.remove('active');
                    const subMenu = link.nextElementSibling;
                    if (subMenu && subMenu.tagName === 'UL') {
                        subMenu.classList.remove('open');
                    }
                });
        
                // 클릭된 링크가 비활성 상태였다면 'active' 클래스를 추가하고 하위 메뉴를 표시합니다.
                if (!isActive) {
                    this.classList.add('active');
                    const subMenu = this.nextElementSibling;
                    if (subMenu && subMenu.tagName === 'UL') {
                        subMenu.classList.add('open');
                    }
                }
            });
        });
    }


    //===================================================================================//
    //=================================faq 아코디언=======================================//
    //===================================================================================//

    let accBtn = document.querySelectorAll(".accInner li button");
    
    accBtn.forEach(function(button) {
        button.addEventListener("click", function() {
            let ar = this.querySelector(".accArr img");
            let nextElement = this.nextElementSibling;
            
            if (nextElement.style.display === "block") {
                ar.setAttribute("alt", "열기");
                ar.classList.remove("on");
                slideUp(nextElement);
            } else {
                // 다른 요소들을 닫음
                document.querySelectorAll(".accInner li .contBox").forEach(function(item) {
                    if (item !== nextElement) {
                        slideUp(item);
                    }
                });
                document.querySelectorAll(".accInner li .accArr img").forEach(function(img) {
                    img.setAttribute("alt", "열기");
                    img.classList.remove("on");
                });
                
                ar.setAttribute("alt", "접기");
                ar.classList.add("on");
                slideDown(nextElement);
            }
        });
    });

    //===================================================================================//
    //=================================콤보박스 범용======================================//
    //===================================================================================//

    var buttons = document.querySelectorAll(".frmCombo button");
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {            
            var parent = this.parentElement;
            var drpdwBox = parent.querySelector(".listBox");
            if (this.classList.contains("spread")) {
                parent.classList.remove("spread");
                this.classList.remove("spread");
                drpdwBox.style.display = "none";
            } else {
                parent.classList.add("spread");
                this.classList.add("spread");
                drpdwBox.style.display = "block";
            }
        });
    });

    //===================================================================================//
    //==================================END OF SCRIPT====================================//
    //===================================================================================//
});

//======================================================================================================================================================================//

//===================================================================================//
//===============================global function=====================================//
//===================================================================================//

//fade In effect fuction
function fadeIn(element) {
    element.style.opacity = 0;
    element.style.display = "block";

    let opacity = 0;
    let timer = setInterval(function() {
        if (opacity >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = opacity;
        opacity += 0.1;
    }, 20);
}

//slide function (slideUp)
function slideUp(element) {
    let height = element.scrollHeight;
    let duration = 300; // milliseconds
    let interval = 10; // milliseconds per frame
    let steps = Math.ceil(duration / interval);
    let stepHeight = height / steps;
    let currentStep = 0;

    let slideUpInterval = setInterval(function() {
        currentStep++;
        element.style.height = (height - stepHeight * currentStep) + "px";
        if (currentStep >= steps) {
            clearInterval(slideUpInterval);
            element.style.display = "none";
            element.style.height = ""; // 높이를 초기화하여 다시 제대로 작동하도록 합니다.
        }
    }, interval);
}

//slide function (slideDown)
function slideDown(element) {
    element.style.display = "block";
    element.style.height = "0px"; // 이 부분을 수정하여 초기 높이를 0으로 설정합니다.
    let height = element.scrollHeight;
    let duration = 300; // milliseconds
    let interval = 10; // milliseconds per frame
    let steps = Math.ceil(duration / interval);
    let stepHeight = height / steps;
    let currentStep = 0;

    let slideDownInterval = setInterval(function() {
        currentStep++;
        element.style.height = (stepHeight * currentStep) + "px";
        if (currentStep >= steps) {
            clearInterval(slideDownInterval);
            element.style.height = ""; // 높이를 초기화하여 다시 제대로 작동하도록 합니다.
        }
    }, interval);
}

// Popup Open
function popOpen(popId){
    let thispop = document.querySelector("#" + popId);
    const body = document.querySelector("body");

    thispop.classList.add("popOpen");
    body.style.overflow = 'hidden';

}

// Popup Close
function popClose(popId){
    let thispop = document.querySelector("#" + popId);
    const body = document.querySelector("body");

    thispop.classList.remove("popOpen");
    body.style.overflow = 'auto';
}

// datepicker
function datepick() {
    let havDatePick = document.querySelectorAll(".datepickWrap");
    if(havDatePick.length > 0) {
        for(i = 1; i < havDatePick.length; i++) {
            datePickerContainerId = '#tui-date-picker-container-' + i;
            datePickerInputId = '#datepicker-input-' + i;

            let datepicker = new tui.DatePicker(datePickerContainerId, {
                date: new Date(),
                input: {
                    element: datePickerInputId,
                    format: 'yyyy.MM.dd'
                }
            });
        }
    }
}


// KB 2024-10-24 수정 //
//================= 템플릿3 탭 타입 토글(pc) & 아이콘 변경 및 텍스트 색상 변경(pc) & 필터검색 클릭시(mobile) ==================//
document.addEventListener('DOMContentLoaded', function() {

    const tabButtons = document.querySelectorAll('.tmpName');
    const tabContents = document.querySelectorAll('.tmpCont'); 
    const tmpContainer = document.querySelector('.tmpContainer');
    const filterMArea = document.querySelector('.filterMArea');

    // 필터검색 버튼 클릭할때
    if (filterMArea) {
        filterMArea.addEventListener('click', function() {
            tmpContainer.style.display = 'block'; 

            tabButtons.forEach(function(btn) {
                btn.classList.remove('active');
            });

            if (tabButtons.length > 0) {
                tabButtons[0].classList.add('active');
            }

            tabContents.forEach(function(content) {
                content.style.display = 'none';
            });

            if (tabContents.length > 0) {
                tabContents[0].style.display = 'block';
            }
        });
    }

    // 템플릿3 탭 타입 클릭시
    function showTabTmp(index) {

        tmpContainer.style.display = 'block';
        var isActive = tabButtons[index].classList.contains('active');
    
        tabButtons.forEach(function(button) {
            button.classList.remove('active');
        });

        tabContents.forEach(function(content) {
            content.classList.remove('active');
            content.style.display = 'none';
        });

        if (!isActive) {
            tabButtons[index].classList.add('active');
            tabContents[index].classList.add('active');
            tabContents[index].style.display = 'block'; 
        } else {
            tabButtons[index].classList.remove('active');
            tabContents[index].classList.remove('active');
            tabContents[index].style.display = 'none'; 

            if (Array.from(tabContents).every(content => content.style.display === 'none')) {
                tmpContainer.style.display = 'none'; 
            }
        }
    }

    // 각 탭 버튼에 클릭 이벤트 추가
    tabButtons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            showTabTmp(index); 
        });
    });


    // 상세검색 클릭
    document.querySelector('.contBox .detailTitle').addEventListener('click', function() {
        const detailBox = document.querySelector('.detailBox');
        const titleImg = document.querySelector('.titleImg');

        titleImg.classList.toggle('toggle');
        detailBox.classList.toggle('show');
      });

});


//================================= 광고 버튼 개별 클릭 =======================================//
document.addEventListener('DOMContentLoaded', () => {
    const industryLists = document.querySelectorAll('.industryList');
    const industryLists2 = document.querySelectorAll('.detailBoxArea ul');

    industryLists.forEach(list => {
        const listItems = list.querySelectorAll('li');

        listItems.forEach(item => {
            item.addEventListener('click', () => {
                listItems.forEach(li => li.classList.remove('active'));
                item.classList.add('active');
            });
        });
    });

    industryLists2.forEach(list => {
        const listItems2 = list.querySelectorAll('li');

        listItems2.forEach(item => {
            item.addEventListener('click', () => {
                listItems2.forEach(li => li.classList.remove('active'));
                item.classList.add('active');
            });
        });
    });
});


//================================= 템플릿 필터검색 버튼 팝업 =======================================//
function openPopup(popId) {
    let popup = document.querySelector("#" + popId);
    popup.classList.add("active");
}

function closePopup(popId) {
    let popup = document.querySelector("#" + popId);
    popup.classList.remove("active");
}


//================================= 아코디언 메뉴 =======================================//
function toggleAccordion(element) {
    const accoCont = element.nextElementSibling;

    element.classList.toggle("active");

    if (accoCont.style.height && accoCont.style.height !== "0px") {
        accoCont.style.height = accoCont.scrollHeight + "px"; 
        setTimeout(() => {
            accoCont.style.height = "0px"; 
        }, 10); 
    } else {
        accoCont.style.height = accoCont.scrollHeight + "px"; 

        accoCont.addEventListener('transitionend', function onTransitionEnd() {
            accoCont.style.height = 'auto'; // 애니메이션 끝난 후 height를 auto로 전환해서 컨텐츠의 유연성에 맞춤(모바일 대응)
            accoCont.removeEventListener('transitionend', onTransitionEnd);
        });
    }
}


//================================= 탭 메뉴 타입 1 =======================================//
function showTab(index) {
    var modTabBtn = document.querySelectorAll('.modTab .tabName');
    var modTabCont = document.querySelectorAll('.modTab .tabCont');

    for (var i = 0; i < modTabBtn.length; i++) {
        modTabBtn[i].classList.remove('active');
        modTabCont[i].classList.remove('active');
    }

    modTabBtn[index].classList.add('active');
    modTabCont[index].classList.add('active');
}


// KB 2024-10-24 수정 //
//================================= 탭 메뉴 타입 2 =======================================//
function showTab2(index) {
    var modTabBtn2 = document.querySelectorAll('.modTabWide .tabName');
    var modTabCont2 = document.querySelectorAll('.modTabWide .tabCont');

    for (var i = 0; i < modTabBtn2.length; i++) {
        modTabBtn2[i].classList.remove('active');
        modTabCont2[i].classList.remove('active');
    }

    modTabBtn2[index].classList.add('active');
    modTabCont2[index].classList.add('active');

    // 슬라이더가 존재하는 탭에 있을 경우 슬라이더 업데이트(makeExperience.html 슬라이드 오류)
    if (document.querySelector('.expTemplate').swiper) {
        document.querySelector('.expTemplate').swiper.update();
    }
}


//================================= 탭 메뉴 타입 3 (지역, 직접) =======================================//
function showTab3(index) {
    var modTabBtn3 = document.querySelectorAll('.mapTab li');
    var modTabCont3 = document.querySelectorAll('.tabCont .tabContBox');
    var filter = document.querySelector(".schRecom");
    var filterSch = document.querySelector(".schLoc");
    var filterApt = document.querySelector(".schApt");
    
    for (var i = 0; i < modTabBtn3.length; i++) {
        modTabBtn3[i].classList.remove('active');
        modTabCont3[i].classList.remove('active');
    }

    modTabBtn3[index].classList.add('active');
    modTabCont3[index].classList.add('active');

    if(index == 1) {
        filterApt.style.display = 'none';
        filterSch.style.display = 'none';
        filter.style.display = 'none';
    }else if(index == 0){
        filterApt.style.display = 'none';
        filterSch.style.display = 'none';
        filter.style.display = 'block';
    }
}

//================================= 탭 메뉴 타입 4 (지역,직접,아파트)=======================================//
function showTab4(index) {
    var modTabBtn4 = document.querySelectorAll('.directTab li');
    var modTabCont4 = document.querySelectorAll('.inTabCont .tabContBox');
    var filter = document.querySelector(".schRecom");
    var filterSch = document.querySelector(".schLoc");
    var filterApt = document.querySelector(".schApt");
    var mo_filterApt = document.querySelector(".moSchAptBox");//2024.10.14 추가
    var w_wid = window.innerWidth;//2024.10.14 추가

    for (var i = 0; i < modTabBtn4.length; i++) {
        modTabBtn4[i].classList.remove('active');
        modTabCont4[i].classList.remove('active');
    }

    modTabBtn4[index].classList.add('active');
    modTabCont4[index].classList.add('active');

    if (index == 1) {
        filter.style.display = 'none';
        filterApt.style.display = 'none';
        filterSch.style.display = 'block';
    }else if (index == 2) {
        filter.style.display = 'none';
        filterSch.style.display = 'none';
        console.log(w_wid);
        //2024.10.14 추가
        if(w_wid > 1024) {
            filterApt.style.display = 'block';
        }else if(w_wid < 1024) {
            mo_filterApt.style.display = 'block';
        }
    }else {
        filterSch.style.display = 'none';
        filterApt.style.display = 'none';
        filter.style.display = 'none';
    }
}

//================================= 탭 메뉴 타입 5 (지도 상단 필터 탭)=======================================//
function showTab5(index) {
    var modTabBtn5 = document.querySelectorAll('.filterTab li');
    var modTabCont5 = document.querySelectorAll('.filterCont .tabContBox');
    var filter = document.querySelector(".schRecom");
    var filterSch = document.querySelector(".schLoc");
    var filterApt = document.querySelector(".schApt");

    for (var i = 0; i < modTabBtn5.length; i++) {
        modTabBtn5[i].classList.remove('active');
        modTabCont5[i].classList.remove('active');
    }

    modTabBtn5[index].classList.add('active');
    modTabCont5[index].classList.add('active');    
}

//================================= 탭 메뉴 타입 6 (지도 상단 지역선택 탭)=======================================//
function showTab6(index) {
    var modTabBtn6 = document.querySelectorAll('.schLoc .filterTab li');
    var modTabCont6 = document.querySelectorAll('.schLoc .filterCont .tabContBox');
    var filter = document.querySelector(".schRecom");
    var filterSch = document.querySelector(".schLoc");
    var filterApt = document.querySelector(".schApt");
    
    for (var i = 0; i < modTabBtn6.length; i++) {
        modTabBtn6[i].classList.remove('active');
        modTabCont6[i].classList.remove('active');
    }

    modTabBtn6[index].classList.add('active');
    modTabCont6[index].classList.add('active');    
}

//================================= 페이징 클릭 시 =======================================//
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.comPagination .numList li').forEach(li => {
        li.addEventListener('click', function(event) {
            event.preventDefault();

            document.querySelectorAll('.comPagination .numList li').forEach(item => {
                item.classList.remove('active');
            });

            this.classList.add('active');
        });
    });
});


//===================================================================================//
//============================End of global function=================================//
//===================================================================================//

document.addEventListener("DOMContentLoaded", function() {

    //===================================================================================//
    //=================================나의광고 목록 기능=================================//
    //===================================================================================//

    const settingBtns = document.querySelectorAll(".settingBtn");
    
    settingBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            const settingCovers = document.querySelectorAll(".settingCover");
            settingCovers.forEach(function(cover) {
                cover.classList.remove("open");
            });
            const parentLi = btn.closest("li");
            const coverToOpen = parentLi.querySelector(".settingCover");
            coverToOpen.classList.add("open");
        });
    });

    const clsBtns = document.querySelectorAll(".settingCover .clsBtn > a");
    
    clsBtns.forEach(function(clsBtn) {
        clsBtn.addEventListener("click", function() {
            const cover = clsBtn.closest(".settingCover");
            cover.classList.remove("open");
        });
    });


    //===================================================================================//
    //=====================================툴팁 기능=====================================//
    //===================================================================================//
    const tooltipBtn = document.querySelectorAll(".tooltipTrig");
    tooltipBtn.forEach(function(clk){
        clk.addEventListener("click", function() {
            const tooltip = document.querySelectorAll(".toolBox");
            tooltip.forEach(function(box) {
                box.style.display = 'none';
            })

            const parent = clk.closest("div");
            const boxOpen = parent.querySelector(".toolBox");
            boxOpen.style.display = 'block';
        })
    })

    const toolCls = document.querySelectorAll(".toolBox > .relCov > a");

    toolCls.forEach(function(cls) {
        cls.addEventListener("click", function() {
            const toolCover = cls.closest(".toolBox");
            toolCover.style.display = 'none';
        })
    })


    //=====================================================================================================//
    //=====================================결제하기 페이지 레이아웃 로직=====================================//
    //=====================================================================================================//
    var footer = document.querySelector('.layoutFooter');
    var btn = document.querySelector('.moPaymentBtn');
  
    if (footer) {
      var footerHeight = footer.offsetHeight;
  
      window.addEventListener('scroll', function() {
        var scrollTop = window.scrollY;
        var documentHeight = document.documentElement.scrollHeight;
        var windowHeight = window.innerHeight;
        var scrollThreshold = documentHeight - windowHeight - footerHeight;
  
        if (scrollTop >= scrollThreshold) {
          btn.classList.add('stp');
        } else {
          btn.classList.remove('stp');
        }
      });
    } else {
      console.error('Footer element not found.');
    }
    
    //=====================================================================================================//
    //=====================================지역설정 페이지 스크립트 =====================================//
    //=====================================================================================================//
    //모바일환경 상세검색 열기
    const detBtn = document.querySelector('.detailSearchBtn'); 
    const moFil = document.querySelector('.schRecom');
    const moFilCls = document.querySelector('.schRecom .moFilterHeader .closeBtn');

    detBtn.addEventListener('click', function(){
        moFil.classList.add('open');
    })
    
    moFilCls.addEventListener('click', function(){
        moFil.classList.remove('open');
    })

    //모바일환경 검색결과 열기
    const resultBtn = document.querySelector('.resultSearchBtn');
    const moRes = document.querySelector('.resultGrp');
    const moResCls = document.querySelector('.resultGrp .moFilterHeader .closeBtn');
    
    resultBtn.addEventListener('click', function(){
        moRes.classList.add('open');
    })
    
    moResCls.addEventListener('click', function(){
        moRes.classList.remove('open');
    })

    //모바일환경 차트 보기
    const label = document.querySelector('.recomList ul li');
    const chart = document.querySelector('.chartPop');
    const dim = document.querySelector(".chartBoxDim");
    const chartCls = document.querySelector('.chartPop .chartCls');
    label.addEventListener('click', () => {
        chart.style.display = "block";
        dim.style.display = "block";
    })

    chartCls.addEventListener('click', () => {
        chart.style.display = "none";
        dim.style.display = "none";
    })

    //모바일 검색결과 보기 
    const rstBtn = document.querySelector('.moSchResult > a');
    const moRstPop = document.querySelector('.moSchLocation');
    const moRstPopCls = document.querySelector('.moSchLocation .closeBtn');
    rstBtn.addEventListener('click', function(){
        moRstPop.classList.add('on');
    })

    moRstPopCls.addEventListener('click', () => {
        moRstPop.classList.remove('on');
    })

    var scr = window.scrollY;
    console.log(scr);

    //상권분석 팝업 오픈 스크립트
    const recom = document.querySelector('.mapSch .cptBtnForm .txt');
    const analize = document.querySelector('.analizePop');
    const analizeDim = document.querySelector('.analizeDim');
    const analizeCls = document.querySelector('.analizePop a.chartCls');
    recom.addEventListener('click', () => {
        analize.style.display = "block";
        analizeDim.style.display = "block";
    })

    analizeCls.addEventListener('click', () => {
        analize.style.display = "none";
        analizeDim.style.display = "none";
    })
});

//============================================================================================================//
//=====================================광고지역설정 > 지역검색 > 타이핑검색=====================================//
//============================================================================================================//

function schTyping() {
    const schTxt = document.querySelector('.typeSearch input[type="text"]');
    $(schTxt).parents('.cptForm').next("div").show();
    $(schTxt).parent('.frmIpt').addClass("typing");
    $(schTxt).next('button').show();
    $(".selectList > ul").css({
        'max-height' : '85px',
        'overflow-y' : 'scroll',
    })
}
//검색 리셋버튼 클릭 시
function schReset() {
    const schTxt = document.querySelector('.typeSearch input[type="text"]');
    $(schTxt).parents('.cptForm').next("div").hide();
    $(schTxt).parent('.frmIpt').removeClass("typing");
    $(schTxt).next('button').hide();
    $(".selectList > ul").css({
        'max-height' : 'none',
        'overflow-y' : 'visible',
    })
}

//아파트 검색
function aptSearch() {
    const aptSch = document.querySelector('.schApt > .cptForm input[type="text"]');
    const moAptSch = document.querySelector('.moSchApt input[type="text"]');
    const moAptRst = document.querySelector(".moRst");
    $(aptSch).parents('.cptForm').next("div").show();
    $(moAptRst).show();
}


// KB 2024-10-24 수정 //
//============================================================================================================//
//================================= mypage - index.html 모바일 '나의정보' 클릭 =================================//
//============================================================================================================//
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.mypageMTxt').addEventListener('click', function() {
        const leftElement = document.querySelector('.left');
        
        if (leftElement.style.display === 'none' || leftElement.style.display === '') {
            leftElement.style.display = 'block';
        } else {
            leftElement.style.display = 'none';
        }
    });
});


// KB 2024-10-24 수정 //
//============================================================================================================//
//=================================== myAd - noList.html 모바일 '제작중' 클릭 ==================================//
//============================================================================================================//
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.mobileTop .mobileClick').addEventListener('click', function() {
        const leftElement = document.querySelector('.pageLocationBar');
        
        if (leftElement.style.display === 'none' || leftElement.style.display === '') {
            leftElement.style.display = 'block';
        } else {
            leftElement.style.display = 'none';
        }
    });
});


// KB 2024-10-24 수정 //
//============================================================================================================//
//================================ mypage - index.html 모바일 정보 아코디언 메뉴 ===============================//
//============================================================================================================//
document.addEventListener('DOMContentLoaded', function () {
    const moreMobile = document.querySelector('.moreMobile');
    const boxWrap = document.querySelector('.boxWrap');

    function toggleBox() {
        // 모바일 사이즈에서만 작동 (768px 이하)
        if (window.innerWidth <= 768) {
            boxWrap.classList.toggle('hidden');
            moreMobile.classList.toggle('active'); 
        }
    }

    moreMobile.addEventListener('click', toggleBox);

    // PC 화면일 경우 boxWrap이 항상 보이도록 설정
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            boxWrap.classList.remove('hidden');
            moreMobile.classList.remove('active');
        }
    });
});


// KB 2024-10-24 수정 //
//============================================================================================================//
//======================================== mypage - 커서 포인트 & 이미지 ======================================//
//============================================================================================================//
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.chkItem').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelectorAll('.chkItem').forEach(li => {
                li.classList.remove('active');
                const img = li.querySelector('img');
                img.src = '../../images/common/ico_chk_b.svg'; 
            });
            
            this.classList.add('active');
            const img = this.querySelector('img');
            img.src = '../../images/common/ico_chk_p.svg';
        });
    });
});


// KB 2024-10-24 수정 //
//============================================================================================================//
//======================================= customer - faq - reservPhoneCs =====================================//
//============================================================================================================//
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.callList li').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelectorAll('.callList li').forEach(li => li.classList.remove('active'));
            this.classList.add('active');
        });
    });
});



// KB 2024-10-24 수정 //
//============================================================================================================//
//===================================== 튜토리얼 탭메뉴 (윈도우 새창) ==========================================//
//============================================================================================================//
function showTab4(index) {
    var modTabBtn4 = document.querySelectorAll('.tutorialTabWrap1 .ttTabMenu1 .tabName');
    var modTabCont4 = document.querySelectorAll('.tutorialTabWrap1 .ttContainer > .tabCont');

    for (var i = 0; i < modTabBtn4.length; i++) {
        modTabBtn4[i].classList.remove('active');
        modTabCont4[i].classList.remove('active');
    }

    modTabBtn4[index].classList.add('active');
    modTabCont4[index].classList.add('active');

    showTab5(0); 
}

function showTab5(index) {
    var modTabBtn5 = document.querySelectorAll('.tutorialTabWrap1 .ttTabMenu2 .tabName');
    var modTabCont5 = document.querySelectorAll('.tutorialTabWrap1 .ttTabDepth2 .tabContainer .tabCont');

    for (var i = 0; i < modTabBtn5.length; i++) {
        modTabBtn5[i].classList.remove('active');
        modTabCont5[i].classList.remove('active');
    }

    modTabBtn5[index].classList.add('active');
    modTabCont5[index].classList.add('active');
}



// KB 2024-10-24 수정 //
//============================================================================================================//
//============================================= 튜토리얼 스크롤  ==============================================//
//============================================================================================================//
document.addEventListener('DOMContentLoaded', function () {
    let currentTabIndex = 0; 
    const tabItems = document.querySelectorAll('.ttTabMenu1 .tabItem'); 
    const totalTabs = tabItems.length; 
    const itemsPerPage = 4; 

    function updateTabDisplay() {
        tabItems.forEach((item, index) => {
            item.style.display = (index >= currentTabIndex && index < currentTabIndex + itemsPerPage) ? 'block' : 'none';
        });

        document.querySelector('.prevClick').style.display = currentTabIndex === 0 ? 'none' : 'block';
        document.querySelector('.nextClick').style.display = currentTabIndex + itemsPerPage >= totalTabs ? 'none' : 'block';
    }

    function nextTab() {
        if (currentTabIndex + itemsPerPage < totalTabs) {
            currentTabIndex += itemsPerPage; 
            updateTabDisplay(); 
        }
    }
    function prevTab() {
        if (currentTabIndex - itemsPerPage >= 0) {
            currentTabIndex -= itemsPerPage; 
            updateTabDisplay(); 
        }
    }

    document.querySelector('.nextClick').addEventListener('click', nextTab);
    document.querySelector('.prevClick').addEventListener('click', prevTab);

    updateTabDisplay();

    function checkScreenSize() {
        if (window.innerWidth > 806) {
            tabItems.forEach(item => item.style.display = 'block'); 
            document.querySelector('.prevClick').style.display = 'none'; 
            document.querySelector('.nextClick').style.display = 'none'; 
        } else if (window.innerWidth <= 806) {
            updateTabDisplay();
        }
    }

    // 초기 화면 크기 체크
    checkScreenSize();

    // 화면 크기 변경 시 체크
    window.addEventListener('resize', checkScreenSize);
});



// KB 2024-10-24 수정 //
//============================================================================================================//
//======================================== 광고만들기 - passInfo 클릭  =========================================//
//============================================================================================================//
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.modeList li').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelectorAll('.modeList li').forEach(li => li.classList.remove('active'));
            this.classList.add('active');
        });
    });
});



// KB 2024-10-24 수정 //
//============================================================================================================//
//========================================== 튜토리얼 - 윈도우 새창  ===========================================//
//============================================================================================================//
function openTutorial(){
    window.open("tutorialStep.html", "_blank", "width=806, height=3000, scrollbars=yes, resizable=no, left=20, top=20");
}


// KB 2024-10-24 수정 //
//============================================================================================================//
//========================================== 튜토리얼 - 고정 스킄롤 ===========================================//
//============================================================================================================//
window.addEventListener('scroll', function() {
    const header = document.querySelector('.ttTabMenu1');
    const scrollPosition = window.scrollY; 

    if (scrollPosition > 50) {  
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


