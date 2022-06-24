export const asMock = <T extends (...args: any) => any>(functionToMock: T) => (functionToMock as unknown) as jest.Mock<ReturnType<T>, Parameters<T>>;
