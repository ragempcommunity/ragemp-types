declare interface GameGxtMp {
	/**
	 * This function is used to add new GXT entries or replace existing ones.
	 *
	 * @param labelNameOrHash Name (string) or hash (number) of the GXT entry.
	 * @param newLabelValue New value of the GXT entry.
	 */
	set(labelNameOrHash: string, newLabelValue: string): void;

	/**
	 * This function is used to get the value of a GXT entry.
	 *
	 * @param labelNameOrHash Name (string) or hash (number) of the GXT entry.
	 */
	get(labelNameOrHash: string): string;

	/**
	 * This function is used to get the default value of a GXT entry.
	 *
	 * @param labelNameOrHash Name (string) or hash (number) of the GXT entry.
	 */
	getDefault(labelNameOrHash: string): string;

	/**
	 * This function is used to reset all changes done to GXT entries.
	 */
	reset(): void;
}
