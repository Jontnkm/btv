
//======================================================================================================================================================================//

//===================================================================================//
//===============================Start of Script=====================================//
//===================================================================================//

document.addEventListener("DOMContentLoaded", function () {

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

    allBtn.addEventListener('click', function(){
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

    //===============================================================================//
    //=================================공통 탭=======================================//
    //===============================================================================//
    function showTab(index) {
        var tabButtons = document.querySelectorAll('.tabName');
        var tabContents = document.querySelectorAll('.tabCont');

        for (var i = 0; i < tabButtons.length; i++) {
            tabButtons[i].classList.remove('active');
            tabContents[i].classList.remove('active');
        }

        tabButtons[index].classList.add('active');
        tabContents[index].classList.add('active');
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
//====================================탭 동작========================================//
//===================================================================================//

    let tabWrap = document.querySelectorAll(".modTab");

    tabWrap.forEach(function(tab){
        let tabContents = tab.querySelectorAll(".tabCont");
        let tabButtons = tab.querySelectorAll(".tabBtn li button");

        tabContents.forEach(function(tabContent, index) {
            tabContent.style.display = "none";
            if (index === 0) {
                tabContent.style.display = "flex";
            }
        });
    
        tabButtons.forEach(function(tabButton) {
            tabButton.addEventListener("click", function() {
                let idx = Array.from(tabButton.parentNode.parentNode.children).indexOf(tabButton.parentNode);
    
                tabContents.forEach(function(tabContent) {
                    tabContent.style.display = "none";
                });
    
                tabContents[idx].style.display = "flex";
    
                tab.querySelectorAll(".tabBtn li").forEach(function(li) {
                    li.classList.remove("active");
                });
                
                tabButton.parentNode.classList.add("active");
            });
        });
    })


    //===================================================================================//
    //============================대출안내 하단 floating==================================//
    //===================================================================================//
    document.addEventListener("scroll", function(){
        let floatLoan = document.querySelector(".floatWrap");
        let footer = document.querySelector(".layoutFooter")
        let scrlT = window.pageYOffset;
        let downT = document.documentElement.scrollHeight - (window.innerHeight + footer.offsetHeight);

        if(floatLoan) {
            if(scrlT > 30 && scrlT < downT) {
                floatLoan.classList.remove("floatNone");
                floatLoan.classList.add("floatOn");
            } else if(scrlT >= downT) {
                floatLoan.classList.remove("floatOn");
                floatLoan.classList.add("floatNone");
            } else {
                floatLoan.classList.remove("floatOn", "floatNone");
            }
        }
    })

    //===================================================================================//
    //===============================인재영입-카드 효과====================================//
    //===================================================================================//

    let cardItem = document.querySelectorAll(".cardItem");

    cardItem.forEach(function(card){
        card.addEventListener("click", function(){
            card.classList.toggle("on");
        })
    })

    //===================================================================================//
    //=========================대출정보조회 - 테이블 아코디언===============================//
    //===================================================================================//
    let acrBtn = document.querySelectorAll(".comAccorTable .accorTit");

    acrBtn.forEach(function(acract){
        acract.addEventListener("click", function(){
            acract.classList.toggle("nowOn");
        })
    })

    //===================================================================================//
    //===========================form focus effect script================================//
    //===================================================================================//
    //input focus & blur title effect & clear function
    var inputs = document.querySelectorAll('.item input[type="text"]');
    
    inputs.forEach(function(inputElement) {
        var parent = inputElement.closest('.item');
        var optTit = parent.querySelector('.optTit');
        var rsBtn = parent.querySelector('.resetBtn');
        
        inputElement.addEventListener('focusin', function() {
            optTit.style.color = '#005ce6'; // 포커스 되었을 때 텍스트 색상 변경
            if (rsBtn) {
                rsBtn.style.display = 'block'; // 버튼 보이기
            }
        });

        inputElement.addEventListener('focusout', function() {
            optTit.style.color = ''; // 포커스가 해제되었을 때 텍스트 색상 원래대로 변경

            if (event.relatedTarget === rsBtn) {
                rsBtn.addEventListener('click', function() {
                    inputElement.value = ''; // 버튼을 클릭하면 입력 내용 지우기

                    if (rsBtn) {
                        rsBtn.style.display = 'none'; // 버튼 숨기기
                    }
                
                });
            }else{
                if (rsBtn) {
                    rsBtn.style.display = 'none'; // 버튼 숨기기
                }
            }
        });
    });

    //===================================================================================//
    //===========================form btninput activation================================//
    //===================================================================================//

    // 옵션 버튼 적용
    /*
    	옵션버튼 반복 적용 ==> (대출 신청 페이지로 이동)
    let btnIpt = document.querySelectorAll(".btnInput.val .btn");
    btnIpt.forEach(function(activeBtn){
        activeBtn.addEventListener("click", function(){
            frmBtnGroup = activeBtn.closest(".frmBtnGroup");
            if (frmBtnGroup) {
                let ipt = frmBtnGroup.previousElementSibling.querySelector("input");
                if (ipt) {
                    let txt = activeBtn.textContent.slice(0,-2);
                    ipt.value = txt;
                } else {
                    console.error("Input element not found");
                }
            } else {
                console.error(".frmBtnGroup not found");
            }
        })
    })

    // 옵션버튼 반복 적용
    function updateInputValue(value, btnOption) {
        let inputElement = btnOption.closest(".frmBtnGroup.for").previousElementSibling.querySelector("input");
        if (inputElement) {
            let currentValue = parseInt(inputElement.value.replace(/,/g, '') || 0);
            let buttonValue = parseInt(value.replace(/,/g, '') || 0);
            let newValue = currentValue + buttonValue;
            inputElement.value = newValue.toLocaleString();
        } else {
            console.error("Input element not found");
        }
    }

    let btnOptions = document.querySelectorAll(".btn.option");
    btnOptions.forEach(function(btnOption) {
        btnOption.addEventListener("click", function() {
            updateInputValue(btnOption.textContent, btnOption);
        });
    });
    */
    

    //===================================================================================//
    //==============================대출정보 조회 리스트===================================//
    //===================================================================================//
    document.querySelectorAll('.cptLoanDetail .card').forEach(function(card) {
        card.addEventListener('click', function() {
            document.querySelectorAll('.cptLoanDetail .card').forEach(function(card) {
                card.classList.remove('nowOn');
            });
            this.classList.add('nowOn');
    
            var cardItemIndex = Array.from(this.closest('.cardItem').parentElement.children).indexOf(this.closest('.cardItem'));
    
            document.querySelectorAll('.cptLoanDetail .loanDtGroup .dtItem').forEach(function(dtItem) {
                dtItem.classList.remove('on');
            });
    
            var loanDtGroup = this.closest('.cardBtnGroup').nextElementSibling;
            loanDtGroup.querySelectorAll('.dtItem')[cardItemIndex].classList.add('on');
    
            datepick();
        });
    });

    // datepick
    datepick();

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

    thispop.classList.add("popOpen");
}

// Popup Close
function popClose(popId){
    let thispop = document.querySelector("#" + popId);

    thispop.classList.remove("popOpen");
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


//================= 템플릿3 탭 타입 토글(pc) & 아이콘 변경 및 텍스트 색상 변경(pc) & 필터검색 클릭시(mobile) ==================//
document.addEventListener('DOMContentLoaded', function() {

    var tabButtons = document.querySelectorAll('.tmpName');
    var tabContents = document.querySelectorAll('.tmpCont'); 
    var tmpContainer = document.querySelector('.tmpContainer');
    var filterM = document.querySelector('.filterMArea');

    tmpContainer.style.display = 'none';

    // 필터검색 버튼 클릭할때
    filterM.addEventListener('click', function() {
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

    // 템플릿3 탭 타입 클릭시
    function showTab(index) {
 
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
            showTab(index); 
        });
    });

});



//================= 광고 버튼 개별 클릭 ==================//
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


//================= 템플릿 필터검색 버튼 팝업 ==================//
function openPopup(popId) {
    let popup = document.querySelector("#" + popId);
    popup.classList.add("active");
}

function closePopup(popId) {
    let popup = document.querySelector("#" + popId);
    popup.classList.remove("active");
}










//===================================================================================//
//============================End of global function=================================//
//===================================================================================//