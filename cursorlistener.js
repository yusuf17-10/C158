AFRAME.registerComponent('cursor-listener', {
    schema:{
        selecterItemId : {default:"",type:"string"}
    },

    init:function(){
        this.handleMouseEnterEvent()
        this.handleMouseLeaveEvent()
    },

    handlePlacesListState:function(){
        var id = this.el.getAttribute(id)
        var placesId = ["taj-mahal","budapest","eiffel-tower","new-york-city"]
        if(placesId.includes(id)){
            var placesContainer = document.querySelector("#places-container")
            placesContainer.setAttribute('cursor-listener',{
                selecterItemId:id
            })
            this.el.setAttribute("material",{
                color:"#fffaa2",
                opacity:1
            })
        }
    },

    handleMouseEnterEvent:function(){
        this.el.addEventListener("mouseenter",()=>{
            this.handlePlacesListState()
        })
    },

    handleMouseLeaveEvent:function(){
        this.el.addEventListener("mouseleave",()=>{
            const {selecterItemId} = this.data
            if(selecterItemId){
                const el = document.querySelector(`#${selecterItemId}`)
                const id = el.getAttribute("id")
                if(id == selecterItemId){
                    el.setAttribute("material",{
                        color:"#aaaaa6",
                        opacity:1
                    })        
                }
            }
        })
    }

});
