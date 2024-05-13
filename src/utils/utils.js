export function getFormatedDate(when = 0) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const today = new Date();
  const required = today.setDate(today.getDate() + when);

  const date = new Date(required)
  return days[date.getDay()] + ', ' + months[date.getMonth()] + ' ' + date.getDate();
};

export function toggleBodyScroll(toggle) {
  document.documentElement.style.overflow = toggle ? "hidden" : "auto";
}