// For Modal Cancel Buttons
function cancelBtn() {
  const confirmation = window.confirm("Are you sure you want to cancel?");

  if (confirmation) {
    $('#insertModal,#updateModal,#archivedStocks,#insertStock').modal('hide') ;
  }
  else 
  {
   window.alert('Modal will remain open.');
  }
};
