/* eslint-disable @typescript-eslint/no-explicit-any */
//export const EMAIL_REGX: any = `/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/`;
/* eslint-disable @typescript-eslint/no-explicit-any */
import CryptoJS from 'crypto-js';
import { SECRET_KEY } from '../constants';
export const daysInMonth = (year: any, month: any) => new Date(year, month, 0).getDate();
export const isWeekend = (date: { getDay: () => number; }) => date.getDay() % 6 === 0;
export function leaveTypeName(m: any) {
    switch (m) {
        case "1":
            return "ANNUAL LEAVE";
            break;
        case "2":
            return "SICK LEAVE";
            break;
        case "3":
            return "MATERNITY LEAVE";
            break;
        case "4":
            return "PATERNITY LEAVE";
            break;
        case "5":
            return "OTHER LEAVE";
            break;
        default:
            break;
    }

}
// Enhanced version with additional information
export function getFileInfo(filePath: string) {
    if (!filePath || typeof filePath !== 'string') {
        return {
            extension: '',
            extensionWithDot: '',
            fileName: '',
            fileNameWithoutExtension: '',
            isValid: false
        };
    }

    const fileName = filePath.split('/').pop() || filePath;
    const lastDotIndex = fileName.lastIndexOf('.');

    if (lastDotIndex === -1 || lastDotIndex === 0) {
        return {
            extension: '',
            extensionWithDot: '',
            fileName: fileName,
            fileNameWithoutExtension: fileName,
            isValid: false
        };
    }

    const extension = fileName.substring(lastDotIndex + 1).toLowerCase();
    const extensionWithDot = fileName.substring(lastDotIndex).toLowerCase();
    const fileNameWithoutExtension = fileName.substring(0, lastDotIndex);

    return {
        extension,
        extensionWithDot,
        fileName,
        fileNameWithoutExtension,
        isValid: true
    };
}

export function appendZeroIfLEQ9(number: any) {
    if (number <= 9) {
        return '0' + number;
    }
    return number.toString();
}
export const leaveChecker = (passedDate: any, leaves: any, holidays: any) => {

    if (isWeekend(new Date(passedDate))) {
        return { color: "brand.grey", name: "WK" }
    }
    if (leaves) {
        const filtered = leaves.find((d: any) => d.leave_date == passedDate)

        if (filtered) {
            //console.log(filtered);
            const subName = filtered.leave_name.substring(1, 0) + "L"
            return { color: filtered.color_code, name: subName }
        }
        if (holidays && holidays.length > 0) {
            const filtered = holidays.find((d: any) => d.date == passedDate)
            if (filtered) {
                return { color: "RED", name: "PL" }
            }
            else {
                return {}
            }
        }

        else {
            return {}
        }
    }
    else {
        return {}
    }
}
export function filterWeekends(holidays: any) {
    return holidays.filter((holiday: { date: string | number | Date; }) => {
        const date = new Date(holiday.date);
        const dayOfWeek = date.getDay();

        // getDay() returns 0 for Sunday, 6 for Saturday
        // Return true to keep the item (exclude weekends)
        return dayOfWeek !== 0 && dayOfWeek !== 6;
    });
}
export function countPublicHolidaysByMonthAndYear(holidays: { filter: (arg0: (holiday: any) => boolean) => { (): any; new(): any; length: any; }; }, month: number, year: number) {
    const weekdaysOnly = filterWeekends(holidays);
    return weekdaysOnly.filter((holiday: { date: string | number | Date; type: string; }) => {
        const holidayDate = new Date(holiday.date);
        return (
            holiday.type === "Public Holiday" &&
            holidayDate.getFullYear() === year &&
            holidayDate.getMonth() + 1 === month // JavaScript months are 0-based
        );
    }).length;
}
export const generateHexColors = (count: number): string[] => {
    const colors: string[] = [];

    for (let i = 0; i < count; i++) {
        const hue = Math.floor((360 / count) * i);
        const color = `#${hslToHex(hue, 70, 50)}`;
        colors.push(color);
    }

    return colors;
};
const hslToHex = (h: number, s: number, l: number): string => {
    s /= 100;
    l /= 100;

    const k = (n: number) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) =>
        Math.round(255 * (l - a * Math.max(Math.min(k(n) - 3, 9 - k(n), 1), -1)))
            .toString(16)
            .padStart(2, "0");

    return `${f(0)}${f(8)}${f(4)}`;
};
export function getWorkingDaysInMonth(year: number, month: any) {
    let workingDays = 0;
    const date = new Date(year, month, 1); // month is 0-based (0 = Jan, 11 = Dec)

    while (date.getMonth() === month) {
        const day = date.getDay();
        if (day !== 0 && day !== 6) {
            // 0 = Sunday, 6 = Saturday
            workingDays++;
        }
        date.setDate(date.getDate() + 1);
    }

    return workingDays * 8;
}
export function monthToIndex(monthName: string) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const index = months.findIndex(
        (month) => month.toLowerCase() === monthName.toLowerCase()
    );

    return index !== -1 ? index : null; // Return null if the month name is not valid
}
export function getDayOfWeek(date: any): string | null {
    // console.log(date)
    try {
        // Array of day names
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        // Convert input to Date object if it's not already
        const dateObj = new Date(date);

        // Check if the date is valid
        if (isNaN(dateObj.getTime())) {
            throw new Error('Invalid date provided');
        }

        // Get the day index (0-6) and return the corresponding day name
        return days[dateObj.getDay()];
    } catch (error) {
        console.error('Error in getDayOfWeek:', error);
        return null; // or return a default value like 'Invalid'
    }
}
export function sumDaysValues(data: any) {
    console.log(data)
    let totalSum = 0;

    data.forEach((program: any) => {
        program.days.forEach((day: any) => {
            totalSum += day.value;
        });
    });

    return totalSum;
}

export function playSound(url: any) {
    if (!url) {
        console.error("No sound URL provided.");
        return;
    }

    const audio = new Audio(url);
    audio.play()
        .then(() => {
            console.log("Sound is playing!");
        })
        .catch(error => {
            console.error("Error playing sound:", error);
        });
}
export function toSentenceCase(str: string) {
    if (!str) return str; // Handle empty or null strings
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
export const calculateAccruedLeaveDays = (totalEntitledLeaves = 26) => {
    // Get the current date
    const now: any = new Date();
    const startOfYear: any = new Date(now.getFullYear(), 0, 1); // January 1st of the current year
    const endOfYear: any = new Date(now.getFullYear(), 11, 31); // December 31st of the current year

    // Calculate the number of days in the year (accounts for leap years)
    const totalDaysInYear = (endOfYear - startOfYear) / (1000 * 60 * 60 * 24) + 1;

    // Calculate the number of days elapsed since the start of the year
    const daysElapsed: any = (now - startOfYear) / (1000 * 60 * 60 * 24) + 1;

    // Calculate accrued leave days
    const accruedLeaveDays = (totalEntitledLeaves / totalDaysInYear) * daysElapsed;

    // Return accrued leave days rounded to 2 decimal places
    return parseFloat(accruedLeaveDays.toFixed(2));
};

export const cryptoJSEncription = {
    setItem: (key: any, value: any) => {
        const encrypted = CryptoJS.AES.encrypt(JSON.stringify(value), SECRET_KEY).toString();
        return encrypted
    },
    getItem: (key: any, encrypted: any) => {
        if (!encrypted) return null;

        try {
            const decrypted = CryptoJS.AES.decrypt(encrypted, SECRET_KEY);
            return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
        } catch (error) {
            console.error('Decryption failed:', error);
            return null;
        }
    },

};


// export const verifyTransaction = async (transactionReference: any) => {
//     const [data, setData] = useState<T[] | any>([]);
//     //const [appData, setAppData] = useState<T>();
//     const [error, setError] = useState("");
//     //const PAYSTACK_SECRET_KEY = "sk_test_your_paystack_secret_key"; // Replace with your Paystack secret key
//     let responseBody = { message: "", data: null }
//     try {
//         const response = await axios.get(`https://api.paystack.co/transaction/verify/${transactionReference}`, {
//             headers: {
//                 Authorization: `Bearer ${SecretKey}`,
//                 "Content-Type": "application/json",
//             },
//         });

//         if (response.status === 200) {
//             // console.log("Transaction verified successfully:", response.data);
//             responseBody.message = "Transaction verified successfully"
//             responseBody.data = response.data
//             return response.data; // Handle successful verification
//         }
//     } catch (error: any) {
//         if (error.response) {
//             console.error("Error verifying transaction:", error.response.data);
//         } else {
//             console.error("Network or server error occurred:", error.message);
//         }
//         return null; // Handle failure response
//     }
//     return { data, error };
// };

// Example usage
// const transactionReference = "example_transaction_reference";
// verifyTransaction(transactionReference)
//     .then((data) => {
//         if (data) {
//             // Process successful verification
//         } else {
//             // Handle verification failure
//         }
//     })
//     .catch((error) => {
//         console.error("Error:", error);
//     });
