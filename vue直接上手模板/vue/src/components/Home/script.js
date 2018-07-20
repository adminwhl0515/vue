import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState({
      homelist: ({home}) => home.homelist
    })
  },
  mounted () {
    this.$store.dispatch('getHomeList')
  }
}
