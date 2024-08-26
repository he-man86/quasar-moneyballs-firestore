import { defineStore } from 'pinia'
import { ref, computed, reactive, nextTick } from 'vue'
import { Notify, Dialog } from 'quasar'
import { useStoreAuth } from 'src/stores/storeAuth'
import { collection, onSnapshot, addDoc, doc, deleteDoc, updateDoc, query, orderBy } from 'firebase/firestore'
import { db } from 'src/firebase/firebase'

let customersCollectionRef = null,
    customersQueryRef = null,
    projectsCollectionRef = null,
    projectsQueryRef = null,
    visitsCollectionRef = null,
    visitsQueryRef = null,
    reportsCollectionRef = null,
    reportsQueryRef = null,
    getEntriesSnapshot = null

export const useStoreEntries = defineStore('entries', () => {

  /*
    state
  */
    const customers = ref([
    ])
    const projects = ref([

    ])
    const visits = ref([
    ])
    const reports = ref([
    ])
    const entriesLoaded = ref(false)

  /*
    getters
  */


  /*
    actions
  */

    const init = () => {
      loadEntries()
    }
    const loadEntries = async (showLoader = true) => {
      const storeAuth = useStoreAuth()
      const customer_id = 'Q9Aec3TAEzP5OlQ7vPUT'
      customersCollectionRef = collection(db, 'users', storeAuth.userDetails.id, 'customers')
      customersQueryRef = query(customersCollectionRef, orderBy('name'))
       if (showLoader) entriesLoaded.value = false
      getEntriesSnapshot = onSnapshot(customersQueryRef, (querySnapshot) => {
        let customersFB = []
        querySnapshot.forEach((doc) => {
          let entry = doc.data()
          entry.id = doc.id
          customersFB.push(entry)
        })
        customers.value = customersFB
        entriesLoaded.value = true
      }, error => {
        Dialog.create({
          title: 'Error',
          message: error.message
        })
      })
    }
    const loadProjects = async (customerId) => {
      projectsCollectionRef = collection(doc(customersCollectionRef, customerId), 'projects');
      projectsQueryRef = query(projectsCollectionRef, orderBy('name'))
        getEntriesSnapshot = onSnapshot(projectsQueryRef, (querySnapshot) => {
        let projectsFB = []
        querySnapshot.forEach((doc) => {
          let entry = doc.data()
          entry.id = doc.id
          projectsFB.push(entry)
        })
        projects.value = projectsFB
        entriesLoaded.value = true
      }, error => {
        Dialog.create({
          title: 'Error',
          message: error.message
        })
      })
    }
    const loadVisits = async (projectId) => {
      visitsCollectionRef = collection(doc(projectsCollectionRef, projectId), 'visits');
      visitsQueryRef = query(visitsCollectionRef, orderBy('name'))
        getEntriesSnapshot = onSnapshot(visitsQueryRef, (querySnapshot) => {
        let visitsFB = []
        querySnapshot.forEach((doc) => {
          let entry = doc.data()
          entry.id = doc.id
          visitsFB.push(entry)
        })
        visits.value = visitsFB
      }, error => {
        Dialog.create({
          title: 'Error',
          message: error.message
        })
      })
    }
    const loadReports = async (projectId) => {
      reportsCollectionRef = collection(doc(projectsCollectionRefCollectionRef, projectId), 'reports');
      reportsQueryRef = query(reportsCollectionRef, orderBy('name'))
        getEntriesSnapshot = onSnapshot(reportsQueryRef, (querySnapshot) => {
        let reportsFB = []
        querySnapshot.forEach((doc) => {
          let entry = doc.data()
          entry.id = doc.id
          reportsFB.push(entry)
        })
        reports.value = reportsFB
      }, error => {
        Dialog.create({
          title: 'Error',
          message: error.message
        })
      })
    }
    const clearAndStopEntries = () => {
      customers.value = []
      if (getEntriesSnapshot) getEntriesSnapshot()
    }
    const addCustomer = async (customer)=>{
      const newCustomer = Object.assign({}, customer,
        {}
      )
      await addDoc(customersCollectionRef, newCustomer)
    }
    const addVisit = async (visit)=>{
      const newVisit = Object.assign({}, visit,
        {}
      )
      await addDoc(visitsCollectionRef, newVisit)
    }
    const addReport = async (report)=>{
      const newReport = Object.assign({}, report,
        {}
      )
      await addDoc(reportCollectionRef, newReport)
    }
    const updateCustomer = async (customerId, updates) => {
      await updateDoc(doc(customersCollectionRef, customerId), updates)
    }
    const deleteCustomer = async (customerId) => {
      await deleteDoc(doc(customersCollectionRef, customerId))
      removeSlideItemIfExists(customerId)
      Notify.create({
        message: 'Entry deleted',
        position: 'top'
      })
    }
    const addProject = async (project)=>{
      const newProject = Object.assign({}, project,
        {}
      )
      await addDoc(projectsCollectionRef, newProject)
    }

  /*
    helpers
  */

  /*
    return
  */

    return {

      // state
      customers,
      projects,
      visits,
      reports,

      entriesLoaded,

      // getters

      // actions
      init,
      loadEntries,
      loadProjects,
      loadVisits,
      loadReports,
      addCustomer,
      addProject,
      addVisit,

      clearAndStopEntries,
      updateCustomer,
      deleteCustomer,
    }

})
