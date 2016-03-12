export class ValidationService {

  static urlValidator(control) {
    // Allow only web browser valid URL
    if (/(http|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(control.value)) {
      return null;
    } else {
      return { 'invalidUrl': true };
    }
  }

}
