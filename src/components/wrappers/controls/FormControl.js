export class FormControl{
   
    constructor(options={
        type:String
    }){
        this._type = options.type;
        this._rules =options.rules
        this._value = options.value;
    }
    get isValid(){
        return true;
    }
    get isDirty(){
        return true;
    }
    set value(value){
        this._value = value;
    }
    get value(){
        return this._value
    }
    
}