let rerenderTree = () => {
    console.log('Tree update');
};



let state = {
    comment: [],
    newName: "",
    newMessage: "",
    newTime: '',
    newDate: '',
};




export const addComment = () => {
    let today = new Date();    

    const formatDate = (date) => {
  
        let dd = date.getDate();
        if (dd < 10) dd = '0' + dd;
      
        let mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;
      
        let yy = date.getFullYear();
      
        return dd + '.' + mm + '.' + yy;
    } 

    const formatTime = (time) => {

        let hh = time.getHours();
        if (hh < 10) hh = '0' + hh;

        let mm = time.getMinutes();
        if (mm < 10) mm = '0' + mm;

        return hh + ':' + mm;
    }

    let setDate = formatDate(today);
    let setTime = formatTime(today);  

    
    
    let newComment = {
        id:4, 
        name: state.newName,
        time: setTime,
        date: setDate,
        comment: state.newMessage,
    };

    state.comment.push(newComment);
    state.newName = '';
    state.newMessage = '';
    rerenderTree(state);
};

export const updateNewNameText = (newName) => {
    state.newName = newName;
    rerenderTree(state);
};

export const updatenewMessageText = (newMessage) => {    
    state.newMessage = newMessage;
    rerenderTree(state);
};



export const subscribe = (observer) => {
    rerenderTree = observer;
};



export default state;