declare module 'rage-shared' {
	export type Maybe<T> = T | number | string;

	export type Array2d = [number, number];
	export type Array3d = [number, number, number];
	export type Array4d = [number, number, number, number];
	export type RGB = Array3d;
	export type RGBA = Array4d;

	export type KeyValueCollection = { [key: string]: any };

	export interface IVector3 {
		readonly x: number;
		readonly y: number;
		readonly z: number;
	}

	export class Vector3 {
		public readonly x: number;
		public readonly y: number;
		public readonly z: number;

		constructor(x: number, y: number, z: number);
		constructor(arr: Array3d);
		constructor(obj: IVector3);

		/**
		 * Add a Vector3 to another Vector3 or scalar
		 *
		 * @param otherVec Vector3 or number: The vector or scalar to be added to the callee.
		 */
		add(otherVec: Vector3 | number): Vector3;

		/**
		 * Get the angle (in radians) between two vectors.
		 *
		 * @param otherVec the other vector to calcuate the angle to.
		 * @returns The angle (in radians) between two vectors.
		 */
		angleTo(otherVec: Vector3): number;

		/**
		 * Clone a vector
		 *
		 * @returns A copy of a Vector3
		 */
		clone(): Vector3;

		/**
		 * Calculate the cross product of two vectors.
		 * The cross product is a vector that is perpendicular to both input vectors.
		 *
		 * @param otherVec The other vector.
		 */
		cross(otherVec: Vector3): Vector3;

		/**
		 * Divide a Vector3 by another Vector3 or scalar.
		 *
		 * @param otherVec The vector or scalar to divide the callee by.
		 */
		divide(otherVec: Vector3 | number): Vector3;

		/**
		 * Calculate the dot product of two vectors.
		 *
		 * @param otherVec The other vector.
		 */
		dot(otherVec: Vector3): number;

		/**
		 * Test where two Vector3s equal each other.
		 *
		 * @param otherVec The vector to compare to the callee.
		 */
		equals(otherVec: Vector3): boolean;

		/**
		 * Get the magnitude of a Vector3
		 *
		 * @returns The magnitude of a Vector3
		 */
		length(): number;

		/**
		 * Get the maximum partial of a Vector3
		 *
		 * @returns The maximum partial of a Vector3
		 */
		max(): number;

		/**
		 * Get the minimum partial of a Vector3
		 *
		 * @returns The minimum partial of a Vector3
		 */
		min(): number;

		/**
		 * Multiply a Vector3 by another Vector3 or scalar.
		 *
		 * @param otherVec The vector or scalar to be added to the callee.
		 */
		multiply(otherVec: Vector3 | number): Vector3;

		/**
		 * Get the opposite of a Vector3 by flipping the sign of each partial.
		 *
		 * @returns The opposite of a Vector3 by flipping the sign of each partial
		 */
		negative(): Vector3;

		/**
		 * Subtract a Vector3 or scalar from another Vector3.
		 *
		 * @param otherVec The vector or scalar to be subtracted from the callee.
		 */
		subtract(otherVec: Vector3 | number): Vector3;

		/**
		 * TODO: docs
		 */
		toAngles(): Array2d;

		/**
		 * Get an array of the partials of a Vector3.
		 *
		 * @returns An array of the partials of a Vector3
		 */
		toArray(): Array3d;

		/**
		 * Normalized copy of a Vector3- one that has the same direction but with a magnitude of 1.
		 *
		 * @returns Normalized copy of a Vector3- one that has the same direction but with a magnitude of 1.
		 */
		unit(): Array3d;
	}
}
