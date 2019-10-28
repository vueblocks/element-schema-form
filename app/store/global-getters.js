export default {
  activeRow (state) {
    let { layoutSections, activeSection } = state
    return layoutSections[activeSection] || []
  }
}
