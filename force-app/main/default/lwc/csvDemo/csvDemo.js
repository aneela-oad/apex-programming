import { LightningElement } from 'lwc';

export default class CsvDemo extends LightningElement {


    userData= [
        {
            username:"Nikhil",
            age:25,
            title:"Developer"
        },
        {
            username: 'Salesforcetroop',
            age: 2,
            title: 'Youtube channel'
        },
        {
            username: 'Friends',
            age: 20,
            title: 'Netflix series'
        }
    ]

    headers = {
        username:"User Name",
        age:"Age",
        title:"Title"
    }

    downloadUserData(){
        console.log("download triggered.")
        exportCSVFile(this.headers, this.userData, "user detail")
    }

}