/** @returns Boolean */

// //упр 12
// Дан массив целых чисел и целое число k. Нужно определить, есть ли в массиве два числа, сумма которых равна k .
// Пример:
// Вход: nums = [10, 15, 3, 7], k = 17
// Выход: True


//решение
module.exports = function(nums, k) {  

    let result = false;
    let currentArray = nums;
    
    
    const total = currentArray.length;    

    for (let i = 0; i < total-1; i++) {
        for (j = i+1; j < total; j++) {
            if (currentArray[i] + currentArray[j] === k) {
                result = true;
                break;
            }

            if (i===total-1 && result === false) {
                result = false;
                currentArray.shift();
                    
                }
            }
        }

    return result;
    }

//