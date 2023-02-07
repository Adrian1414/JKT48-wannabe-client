<script>
export default {
    name: 'Loading',
    data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      displayTextArray: ["...."],
      typingSpeed: 120,
      erasingSpeed: 100,
      newTextDelay: 100,
      displayTextArrayIndex: 0,
      charIndex: 0,
    };
  },
  methods : {
    typeText() {
      if (this.charIndex < this.displayTextArray[this.displayTextArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[this.displayTextArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.displayTextArray[this.displayTextArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 50);
      }
    }
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 300);
  },
}
</script>

<template>
    <div class="flex justify-center">
    <h1 class="font-bold" >
     
      <span class="typed-text font-extrabold text-2xl text-red-600 ">{{ typeValue }}</span>
      
      <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
    </h1>
  </div>
    
</template>