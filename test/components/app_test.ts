// import * as React from "react";
// import * as ReactDOM from "react-dom";
// import * as TestUtils from "react-addons-test-utils";
// import * as App from '../../src/app';

// describe('App' , () => {
//   let component;

//   beforeEach(() => {
//     component = renderComponent(App);
//   });

//   it('renders something', () => {
//     expect(component).to.exist;
//   });
// });


// describe("Hello", () => {
//     let renderer: React.ShallowRenderer;

//     beforeEach(() => {
//         renderer = TestUtils.createRenderer();
//         renderer.render(<Hello name="Willson" />);
//     });

//     it("should render correctly", () => {
//         const result = renderer.getRenderOutput();
//         chai.assert.strictEqual(result.type, "div");
//     });

//     it("should have correct prop values", () => {
//         const result = renderer.getRenderOutput();
//         const propValues = result.props.children.join("");
//         chai.assert.strictEqual(propValues, "Hello, Willson");
//     });
// });