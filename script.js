const inputSlider = document.querySelector('.inputSlider')
const amount = document.querySelector('.amount')
const quantity = document.querySelector('.quantity')
const toggleSwitch = document.querySelector('.toggleSwitch')
const rangeProgress = document.querySelector('.range-progress')
let giveDiscount = false;

function updateAmount(value){
    if(giveDiscount){
        amount.innerHTML = `$${value*0.75}.00`
    }
    else{
        amount.innerHTML = `$${value}.00`
    }
}
updateAmount(16)
function updateQuantity(value){
    quantity.innerHTML = `${value}`
}
updateQuantity('100K')

function updateRangeProgress(value){
    rangeProgress.style.width = `${value}%`
}

function updateSlider(){
    let sliderValue = inputSlider.value
    if(sliderValue == 20){
        updateAmount(8)
        updateQuantity('10K')
        updateRangeProgress(0)
    }
    else if(sliderValue == 40){
        updateAmount(12)
        updateQuantity('50K')
        updateRangeProgress(25)
    }
    else if(sliderValue == 60){
        updateAmount(16)
        updateQuantity('100K')
        updateRangeProgress(50)
    }
    else if(sliderValue == 80){
        updateAmount(24)
        updateQuantity('500K')
        updateRangeProgress(75)
    }
    else if(sliderValue == 100){
        updateAmount(36)
        updateQuantity('1M')
        updateRangeProgress(100)
    }
}

inputSlider.addEventListener('input', updateSlider)
toggleSwitch.addEventListener('click',function (){
    toggleSwitch.classList.toggle('active')
    giveDiscount = toggleSwitch.classList.contains('active')
    if(giveDiscount){
        updateSlider()
    }
    else{
        updateSlider()
    }
    console.log(giveDiscount);
})

function abbrevName(name){
    const words = name.split(' ')
    const initials = []
    words.forEach(word => {
        let initial = word.charAt(0).toUpperCase()
        initials.push(initial)
    });
    return initials.join('.')
}
console.log(abbrevName("Isaac Darko asante Kwaku"));

function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        console.log('😀');
        for(let j = 0; j < arr.length-i-1; j++){
            if(arr[j]>arr[j+1]){
                let temp;
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}
console.log(bubbleSort([10,41,20,34,5,10,32,55,66,5,100]));

