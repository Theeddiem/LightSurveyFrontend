<template>
  <div class="footer-container">
        <img @click="whatsAppLink" id="whatsApp-share" class="shareIcon" src="../assets/whatsAppIcon.svg" height="35"/>
        <img @click="copyLink" id="copyLink-share" class="shareIcon" src="../assets/copyLinkIcon.svg" height="30"/>
</div>  
</template>

<script>
import IndicatorPopup from '../utilities'
export default {

    data: function () {
    return {

    }
  },

    methods:{
        whatsAppLink () {
                    
             if(this.$store.state.currentSurvey== null)
                  window.location.href = `https://api.whatsapp.com/send?text=Create Your Free Survey-${window.location.href}`;
             else{       
             window.location.href = `https://api.whatsapp.com/send?text=${ this.$store.state.currentSurvey.question}-${window.location.href}`;
             }
        
        },

        copyLink() {
             // Create new element
            var el = document.createElement("textarea");
            // Set value (string to be copied)
            el.value = window.location.href;
            // Set non-editable to avoid focus and move outside of view
            el.setAttribute("readonly", "");
            el.style = { position: "absolute", left: "-9999px" };
            document.body.appendChild(el);
            // Select text inside element
            el.select();
            // Copy text to clipboard
            document.execCommand("copy");
            // Remove temporary element
            document.body.removeChild(el);
                  IndicatorPopup("link copied", "copylink");
            
        }
    },

     created: function () {
    
  }
}
</script>

<style>

.footer-container{
  grid-column: 2;
  grid-row: 3;
}


.shareIcon {
  margin-left: 10px;
}

.shareIcon:hover {
  cursor: pointer;
}





</style>