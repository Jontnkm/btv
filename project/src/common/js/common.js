
//======================================================================================================================================================================//

//===================================================================================//
//===============================Start of Script=====================================//
//===================================================================================//

document.addEventListener("DOMContentLoaded", function () {

    //===================================================================================//
    //==================================사이드메뉴========================================//
    //===================================================================================//

    //3뎁스가 있는 2뎁스메뉴
    let depth2Names = document.querySelectorAll(".cptLnb .depth2Menu.add .depth2Name");
    //활성화 3뎁스메뉴
    function menuActive(depth2Menu){
        let thisOpend = depth2Menu.classList.contains("active");   //활성화 되어있는 메뉴 체크
        console.log(thisOpend);
        
        if(thisOpend){
            let activeMenu = document.querySelector(".cptLnb .depth2Menu.add.active");
            //3뎁스메뉴 그룹
            let depth3Group = activeMenu.querySelector(".depth3Group");
            let depth3Height = activeMenu.querySelector(".depth2Name").offsetHeight + depth3Group.offsetHeight;
            //선택된 3뎁스 아이콘 열린 방향으로
            activeMenu.classList.add("on");
            activeMenu.style.height = depth3Height + "px";
        }
    }

    // 좌메뉴 3뎁스 유무 확인
    let depth3Menu = document.querySelectorAll(".cptLnb .depth2Menu");

    depth3Menu.forEach(function(depth2Menu){
        if(depth2Menu.classList.contains("add")){
            menuActive(depth2Menu);
        }
    })

    //3뎁스가 있는 2뎁스메뉴 전체를 대상
    depth2Names.forEach(function (depth2Name) {
        //메뉴클릭
        depth2Name.addEventListener("click", function (e) {
            e.preventDefault();
            let thisOpend = this.closest(".depth2Menu").classList.contains("on");   //활성화 되어있는 메뉴 체크
            //3뎁스메뉴 그룹
            let depth3Group = this.closest(".depth2Menu").querySelector(".depth3Group");
            let depth3Height = this.closest(".depth2Menu").querySelector(".depth2Name").offsetHeight + depth3Group.offsetHeight;

            if(thisOpend){ //메뉴가 열려 있다면
                //3뎁스 아이콘 닫힌 방향으로
                document.querySelectorAll(".cptLnb .depth2Menu.add").forEach(function (element) {   
                    element.classList.remove("on");
                    element.style.height = element.querySelector(".depth2Name").offsetHeight + "px";
                });
            }else{
                //3뎁스 아이콘 닫힌 방향으로
                document.querySelectorAll(".cptLnb .depth2Menu.add").forEach(function (element) {
                    element.classList.remove("on");
                    element.style.height = element.querySelector(".depth2Name").offsetHeight + "px";
                });

                //선택된 3뎁스 아이콘 열린 방향으로
                this.closest(".depth2Menu").classList.add("on");
                this.closest(".depth2Menu").style.height = depth3Height + "px";
            }

        });
    });

    //===================================================================================//
    //================================헤더 드롭 메뉴======================================//
    //===================================================================================//

    let depth1MenuLinks = document.querySelector(".menuArea");
    let dropDownMenu = document.querySelector(".dropDownMenu");
    let menuArea = document.querySelector(".menuArea");
    let elementToFadeIn = document.querySelector(".dropDownMenu");

    //메뉴가 없는 페이지가 있어서 수정 osw
	if(depth1MenuLinks){
		depth1MenuLinks.addEventListener("mouseenter", function() {
	        dropDownMenu.style.display = "block";
	        fadeIn(elementToFadeIn);
	    });
	}
    
    //메뉴가 없는 페이지가 있어서 수정 osw
	if(menuArea){
	    menuArea.addEventListener("mouseleave", function() {
	        dropDownMenu.style.display = "none";
	    });
    }

    //===================================================================================//
    //=============================전체(햄버거)메뉴 오픈===================================//
    //===================================================================================//

    const allBtn = document.querySelectorAll(".allMenuBtn")
    for (const button of allBtn) {
        button.addEventListener('click', function(event) {
            let allMenuBtn = document.querySelector(".allMenuBtn");
            let target = document.querySelector(".allMenuCov .allMenuBtn");
            let allMenuCov = document.querySelector(".allMenuCov");
            let body = document.querySelector("body");
            if (!target.classList.contains("active")) {
                fadeIn(allMenuCov);
                target.classList.add("active");
                body.style.overflow = "hidden";
            } else {
                allMenuCov.style.display = "none";
                target.classList.remove("active");
                body.style.overflow = "auto";
            }
        })
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
    // var body = document.querySelector("body");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            var parent = this.parentElement;
            var drpdwBox = parent.querySelector(".drpdwBox");
            if (this.classList.contains("on")) {
                parent.classList.remove("on");
                this.classList.remove("on");
                drpdwBox.style.display = "none";
            } else {
                parent.classList.add("on");
                this.classList.add("on");
                drpdwBox.style.display = "block";
                // body.addEventListener("click", function() {
                //     var dropdowns = document.querySelectorAll(".frmCombo .drpdwBox");
                //     dropdowns.forEach(function(dropdown) {
                //         dropdown.style.display = "none";
                //         dropdown.parentElement.classList.remove("on");
                //         dropdown.parentElement.querySelector("button").classList.remove("on");
                //     });
                // });
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
    
    // 영상 팝업일 시
    let hasMov = thispop.querySelector("iframe");

    if(hasMov) {
        hasMov.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}','*');
    }

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

//===================================================================================//
//============================End of global function=================================//
//===================================================================================//