var diaryEntries = [];

class DiaryEntry {
  constructor(primaryKey, date, sleepHour, Nutrition, productivityRate, happinessRate) {
    this.pk = {};
    this.pk.N = primaryKey.toString();
    this.date = {}; 
    this.date.S = new Date(date).toDateString();
    this.sleepHour = {};
    this.sleepHour.S = sleepHour;
    this.happinessRate = {};
    this.happinessRate.BOOL = happinessRate; 
    this.productivityRate = {};
    this.productivityy.S = productivityRate; 
    if (Nutrition != null) {
      this.Nutrition = {};
      this.Nutrition.SS = Nutrition; 
    }
    this.month = {};
    this.month.N = new Date(date).getMonth().toString();
  }
}

diaryEntries.push(new DiaryEntry(0, 'October 10, 2018', true, ["food", "baby formula"]));
diaryEntries.push(new DiaryEntry(1, '3', true, ["coffee"]);
diaryEntries.push(new DiaryEntry(2, '80%', true, ['happy']));
diaryEntries.push(new DiaryEntry(3, '80%', "I completed 10 tasks", true, ["happy"]));

console.log(diaryEntries);