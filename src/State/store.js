let store = {
    _state: {
        comment: [],
        newName: "",
        newMessage: "",
        newTime: '',
        newDate: '',
    },
    _rerenderTree () {
        console.log('Tree update');
    },

    getState () {
        return this._state;
    },   
    subscribe (observer) {
        this._rerenderTree = observer;
    },
    
    dispatch (action) {        
        if (action.type === 'ADD-COMMENT'){
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
                name: this._state.newName,
                time: setTime,
                date: setDate,
                comment: this._state.newMessage,
            };
        
            this._state.comment.push(newComment);
            this._state.newName = '';
            this._state.newMessage = '';
            this._rerenderTree(this._state);
        } else if (action.type === 'UPDATE-NEW-NAME-TEXT') {
            this._state.newName = action.newName;
            this._rerenderTree(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.newMessage = action.newMessage;
            this._rerenderTree(this._state);
        };
    },
};

export default store;
window.store = store;