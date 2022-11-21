import {MalibuFactory, KiaFactory} from "./factory/models";

console.log(`
    В паттерне фабричный метод абстрактный фабричный класс должен только предоставить интерфейс для создания продуктов, 
    а его подклассы определяют конкретные создаваемые объекты, 
    используя объектно-ориентированный полиморфизм и принцип подстановки LISKOV, 
    когда программа работает, объекты подкласса переопределит объекты родительского класса, 
    упрощая расширение системы.
`)

const malibuFactory = new MalibuFactory();
const kiaFactory = new KiaFactory();

malibuFactory.produceVehicle().run()
kiaFactory.produceVehicle().run()