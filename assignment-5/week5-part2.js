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

diaryEntries.push(new DiaryEntry(0, 'March 10, 1976', "I was born!", true, ["baby food", "baby formula"]));
diaryEntries.push(new DiaryEntry(1, 'October 31, 2015', "I piloted my first solo flight!", true, ["pancakes"]));
diaryEntries.push(new DiaryEntry(2, 8675309, "867-5309?", false));
diaryEntries.push(new DiaryEntry(3, 'October 8, 2018', "I taught my favorite students.", true, ["peas", "carrots"]));

console.log(diaryEntries);