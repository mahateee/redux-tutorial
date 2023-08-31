function createStore(){
    // 1. the state
    // 2. get the state
    // 3. listen to changes on the state
    // 4. update the state

    let state;
    let listeners=[]
    const getState=()=>state
    const subscribe=(listener)=>{
        listeners.push(listener)
        return () => {
            listeners = listeners.filter((l) => l !== listener)
          }

    }
    return {
        getState
    }
}

const store =createStore()
store.subscribe(()=>{
    console.log("the new state is:", store.getState())
})
const unsubscribe=store.subscribe(()=>{
    console.log("the store changed")
})
unsubscribe()