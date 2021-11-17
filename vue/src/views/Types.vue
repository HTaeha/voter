<template>
  <div>
    <div class="container">
      <!-- this line is used by starport scaffolding # 4 -->
		<!-- <SpType modulePath="coreators.voter.voter" moduleType="Vote"  />
		<SpType modulePath="coreators.voter.voter" moduleType="Poll"  /> -->
    <h3>
      Voter Module
    </h3>
      <PollForm />
      <PollList />
    </div>
  </div>
</template>

<script>
import PollForm from "../components/PollForm";
import PollList from "../components/PollList";
export default {
  name: 'Types',
  components: { PollForm, PollList },
}
</script>
