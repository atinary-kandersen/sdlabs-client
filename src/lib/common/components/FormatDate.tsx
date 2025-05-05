/**
 * @param date - The date to format. When passing a string, it's strongly recommended to use the ISO 8601 format to ensure timezones are handled correctly.
 */
export default function FormatDate({ date }: { date: Date | string }) {
  return <wa-format-date date={date} lang="en"></wa-format-date>;
}
