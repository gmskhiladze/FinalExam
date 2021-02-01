
async function getData(url) {
    return fetch(url).then((response) =>
        response.json()
    )
}

function task1(args) {

    const getAverageSalary = (arr) => {
        let salarySum = 0;
        arr.forEach(el => (salarySum += el.salary))
        return arr.length > 0 ? salarySum / arr.length : 0
    }
    const employees = args.filter(el => el.country.toLowerCase() === "georgia" &&
        el.company.toLowerCase() === "amazon")

    return getAverageSalary(employees)
}

function task2(args) {
    return args.filter(el => el.company.toLowerCase() === "facebook" &&
        el.department.toLowerCase() === "it")
}

function task3(args) {
    return args.filter(el => el.country.toLowerCase() === "india" &&
        el.department.toLowerCase() === "hr" && el.salary > 500 * 10 ** 3)
}

function task4(args) {
    return args.filter(el => el.company.toLowerCase() === "google" && el.country.toLowerCase() === "uk" &&
        el.department.toLowerCase() === "sales")
        .map(el => {
            return { email: el.email, firstname: el.name.first, dob: el.dob }
        })

}

function task5(args) {
    const comparator = (a, b) => {
        return b.salary - a.salary
    }
    return args.filter(el => (el.company.toLowerCase() === "google" ||
        el.company.toLowerCase() === "apple") &&
        new Date(el.dob).getFullYear() > 1980).sort(comparator)[0]
}

function task6(args) {

    const calculateAge = birthday => {
        const ageDifMs = Date.now() - birthday;
        const ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    const averageAgeOfEmployees = (arr) => {
        let sumAge = 0;
        arr.forEach(el => {
            if (!!el) sumAge += calculateAge(new Date(el.dob))
        })

        return sumAge / arr.length
    }

    const allEmployeesAverageAge = averageAgeOfEmployees(args)
    const googleEmployeesAverageAge = averageAgeOfEmployees(args.filter(el => el.company.toLowerCase() === "google"))

    return allEmployeesAverageAge < googleEmployeesAverageAge ? 1 : 2
}

function task7(args) {
    const comparator = (a, b, i = 0) => {
        const aFirstName = a.name.first
        const bFirstName = b.name.first
        if (aFirstName[i] > bFirstName[i]) return 1;

        else if (aFirstName[i] === bFirstName[i]) {
            if (i < aFirstName.length && i < bFirstName.length) return comparator(a, b, i + 1)
            else if (a.length > b.length) return 1
            else return 1;
        } else return -1
    }

    return args.sort(comparator)

}

function task8(args) {

    return args.some(el => el.company.toLowerCase() === "google" &&
        el.salary > 600 * 10 ** 3 && new Date(el.dob).getFullYear() > 1990)
}

function task9(args) {
    let sumSalary = 0;

    const employees = args.filter(el => el.company.toLowerCase() === "apple" &&
        el.country.toLowerCase() === "usa").forEach(el => sumSalary += el.salary)
    return sumSalary
}

function task10(args) {

    const isBornAtNight = (birth = new Date()) => {
        return birth.getUTCHours() < 12;
    }

    return args.filter(el => isBornAtNight(new Date(el.dob)))

}

async function main() {
    const url = `https://next.json-generator.com/api/json/get/VkBw8XP2d`
    const res = await getData(url)

    console.log(task1(res))
    console.log(task2(res))
    console.log(task3(res))
    console.log(task4(res))
    console.log(task5(res))
    console.log(task6(res))
    console.log(task7(res))
    console.log(task8(res))
    console.log(task9(res))
    console.log(task10(res))
}

// main();