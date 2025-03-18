let person = {
    name: 'Guanabara', 
    gender: 'M', 
    weight: 85.4,
    getFat(p=0){
        console.log('engordou');
        this.weight += p;
    }
};
person.getFat(5);
console.log(person.weight);