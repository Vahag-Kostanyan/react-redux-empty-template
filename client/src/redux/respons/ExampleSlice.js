export default (example = [], action) => {
    switch(action.type){
        case "get_example":
            return action.payload;
        default:
            return example;
    }
}